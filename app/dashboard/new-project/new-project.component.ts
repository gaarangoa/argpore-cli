import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';

// services
import { Session }      from '../../../services/session/session.service';
import { ProjectService } from '../../../services/project/project.service'



@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  newProjectForm: FormGroup;
  formValid: boolean = false;
  fields: Object;
  timestamp: Date;

  constructor(
      public router: Router, 
      private projectService: 
      ProjectService, 
      private session: Session,
      public fb: FormBuilder ){

      this.newProjectForm = this.fb.group({
        'name': [undefined, [Validators.required, Validators.minLength(5)]],
        'description':[undefined, [Validators.required, Validators.minLength(50)]],
        'biome':[undefined, Validators.required]
      })

      this.newProjectForm.valueChanges.subscribe(() => {
        this.formValid = this.newProjectForm.valid;
      });
  }


  create(){
      this.timestamp = new Date();
      this.fields = this.newProjectForm.value
      this.fields['userID'] = this.session.get('user')['_id']
      this.fields['timestamp'] = this.timestamp.getTime();
      this.fields['date'] = this.timestamp.toString();

      this.projectService.create(this.fields) 
        .subscribe(project => {
          // this.projectService.projectsByUser.unshift(this.projectService.projectInfo);
          this.newProjectForm.reset();
          // console.log(this.projectService.projectsByUser)
        })
      
    }

  ngOnInit() {
  }

}
