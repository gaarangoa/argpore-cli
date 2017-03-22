import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { Session } from '../../../../services/session/session.service';
import { SampleService } from '../../../../services/sample/sample.service';
import {SampleComponent} from '../sample.component';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

  constructor(
      private router: Router, 
      private sampleService: SampleService,
      private route: ActivatedRoute,  
      private session: Session,
      private sampleComponent: SampleComponent
  ) { }

  ngOnInit() {
  }

  goToExecute(){
    this.sampleComponent.activeIndex = 3;
    this.router.navigate(['project/'+this.sampleService.sampleInfo['projectID']+'/add-sample/execute']);
  }

}
