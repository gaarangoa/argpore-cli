import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';


@Injectable()
export class ProjectService {
  
  projectInfo: Object;
  projectsByUser: Array<Object>;
  removed: Boolean;

  constructor (private http:Http){
    this.projectsByUser = [];
    this.projectInfo = {};
  }

  create(fields: Object) {
    return this.http.post('http://bench.cs.vt.edu/argpore_access/project/create/', fields)
      .map(res => {
        this.projectInfo = res.json()[0];
        this.projectsByUser.push(res.json())
      })
  }


  readProjectByUserId(userID: string){
    return this.http.get('http://bench.cs.vt.edu/argpore_access/project/user/'+userID)
      .map(res => {
        if(res.json()){this.projectsByUser = res.json();}
      })
  }

  getProjectById(projectID: string){
    return this.http.get('http://bench.cs.vt.edu/argpore_access/project/'+projectID)
      .map(res => {
        // console.log(res.json())
        this.projectInfo = res.json()[0];
      })
  }

  deleteProject(fields: Object){
    return this.http.post('http://bench.cs.vt.edu/argpore_access/project/remove/', fields)
      .map( res=> {
        this.projectsByUser = this.projectsByUser.filter(item => item['_id'] != fields['_id'])
      });
  }


}