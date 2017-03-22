import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { Session } from '../../../../services/session/session.service';
import { SampleService } from '../../../../services/sample/sample.service';
import {SampleComponent} from '../sample.component';


@Component({
  templateUrl: './execute.component.html',
  styleUrls: ['./execute.component.css']
})
export class ExecuteComponent implements OnInit {

  constructor(
    private router: Router, 
    private sampleService: SampleService,
    private route: ActivatedRoute,  
    private session: Session,
    private sampleComponent: SampleComponent
  ){ 

  }


  run(){
    this.sampleService.sampleInfo['input'] = this.sampleService.upload_directory+this.sampleService.sampleInfo['input'];
    this.sampleService.sampleInfo['barcode'] = this.sampleService.upload_directory+this.sampleService.sampleInfo['barcode']; 
      
    this.sampleService.run(this.sampleService.sampleInfo)
      .subscribe(project => {
        this.sampleComponent.activeIndex=0;
        this.router.navigate(['project/'+this.sampleService.sampleInfo['projectID']]);
      })
  }


  ngOnInit() {
  }

}
