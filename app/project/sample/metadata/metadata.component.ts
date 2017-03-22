import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';

import { FormBuilder, Validators, FormGroup} from '@angular/forms';

import { Session } from '../../../../services/session/session.service';
import { SampleService } from '../../../../services/sample/sample.service';

import {SampleComponent} from '../sample.component';

import {ProjectComponent} from '../../project.component';


@Component({
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.css']
})
export class MetadataComponent implements OnInit {

  newSampleForm: FormGroup;
  updateSampleForm: FormGroup;
  inputForm: FormGroup;
  barcodeForm: FormGroup;
  formValid: boolean = false;
  fields: Object;
  timestamp: Date;
  file: File;

  constructor(  private router: Router, 
              private sampleService: SampleService,
              private route: ActivatedRoute,  
              private session: Session,
              public fb: FormBuilder,
              private sampleComponent: SampleComponent, 
              private projectComponent: ProjectComponent){


                this.newSampleForm = this.fb.group({
                'name': [undefined, [Validators.required]],
                'primary-group':[undefined, [Validators.required]],
                'secondary-group':[undefined, [Validators.required]],
                'location':[undefined, Validators.required],
                'description':[undefined, Validators.required]
                })
              
                this.inputForm = this.fb.group({
                  'inputFile': [undefined, [Validators.required]],
                })
              
                this.barcodeForm = this.fb.group({
                  'inputFile': [undefined, [Validators.required]],
                })
  
                this.newSampleForm.valueChanges.subscribe(() => {
                  this.formValid = this.newSampleForm.valid;
                });

                this.updateSampleForm = this.fb.group({

                })

                // console.log(this.route.snapshot.params['pid']);
                // console.log(this.route.snapshot.data['type']);


              }

  ngOnInit() {
  }

  create(){
      this.timestamp = new Date();
      this.fields = this.newSampleForm.value
      this.fields['userID'] = this.session.get('user')['_id']
      this.fields['timestamp'] = this.timestamp.getTime();
      this.fields['date'] = this.timestamp.toString();
      this.fields['projectID'] = this.projectComponent.projectID;
      this.fields['status'] = 'created';

      // console.log(this.fields)

      this.sampleService.create(this.fields) 
        .subscribe(project => {
          this.newSampleForm.reset();
          this.fields = this.sampleService.sampleInfo;
          this.router.navigate(['project/'+this.fields['projectID']+'/add-sample/upload']);
          this.sampleComponent.activeIndex = 1;
        })
      
    }


}
