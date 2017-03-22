import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';



@Injectable()
export class SampleService {
  
  sampleInfo: Object;
  samplesByProject: Array<Object>;
  file: File;
  done_event: boolean;
  barcode_name: string;
  input_name: string;
  analysisSample: Object;
  upload_directory: string;

  constructor (private http:Http){
    this.done_event = false;
    this.upload_directory = '/Volumes/data/dev/nanopore/pipeline/Access/tmp/';
  }

  create(fields: Object) {
    
    return this.http.post('http://localhost:5510/sample/create/', fields)
      .map(res => {
        this.sampleInfo = res.json();
        // console.log(this.sampleInfo)
      })
  }

  deleteSample(fields: Object){
    return this.http.post('http://localhost:5510/sample/remove/', fields)
      .map( res=> {
        
        console.log(this.samplesByProject)
        this.samplesByProject = this.samplesByProject.filter(item => item['_id'] != fields['_id'])
        console.log(this.samplesByProject)
      
      })
  }

  getSamplesByProject(projectID: string){
    return this.http.get('http://localhost:5510/sample/project/'+projectID)
      .map(res => {
        if(res.json()){
          this.samplesByProject = res.json();
        }
      })
  }

  update(fields: Object){
    return this.http.post('http://localhost:5510/sample/update/', fields)
      .map(res => {
        this.sampleInfo = res.json();
        console.log(this.sampleInfo)
      }) 
  }

  run(fields: Object){
    return this.http.post('http://localhost:5510/analysis/run', fields)
      .map(res => {
        this.analysisSample = res.json()
        console.log("RUNNING")
      })
  }
  
}