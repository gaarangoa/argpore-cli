import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Session } from '../../../../services/session/session.service';
import { SampleService } from '../../../../services/sample/sample.service';
import {Message} from 'primeng/primeng';


import {SampleComponent} from '../sample.component';

@Component({
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  message: string;
  msgs: Message[];
  uploadedFiles: any[] = [];
  filename: string;


  constructor(
      private router: Router, 
      private sampleService: SampleService,
      private route: ActivatedRoute,  
      private session: Session,
      public fb: FormBuilder,
      private sampleComponent: SampleComponent
    ) {

      this.sampleService.sampleInfo['input']=this.sampleService.sampleInfo['timestamp']+'_rawreads.fasta'
      this.sampleService.sampleInfo['barcode']=this.sampleService.sampleInfo['timestamp']+'_barcodes.fasta'

   }

   goToParameters(){
     this.sampleComponent.activeIndex = 2;
     this.router.navigate(['project/'+this.sampleService.sampleInfo['projectID']+'/add-sample/parameters']);
     
   }

  ngOnInit() {
  }

}
