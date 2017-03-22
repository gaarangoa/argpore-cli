import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {StepsModule,MenuItem} from 'primeng/primeng';
import { ProjectComponent } from './project.component'
import { SampleComponent } from './sample/sample.component';
import { MetadataComponent } from './sample/metadata/metadata.component';
import { UploadComponent } from './sample/upload/upload.component';
import { ParametersComponent } from './sample/parameters/parameters.component';
import { ExecuteComponent } from './sample/execute/execute.component';
import { ViewSamplesComponent } from './view-samples/view-samples.component';

// Here is how the routes by default are loaded into the component, it has to be with children

const routes: Routes = [

  { path:'project/:pid/dashboard', redirectTo:'dashboard'},
  
  { path:'project/:pid', component:ProjectComponent,
    children:[
      { path:'add-sample', component: SampleComponent, data: { type: 'pid' },
        children: [
          {path:'', component:MetadataComponent},
          {path:'upload', component:UploadComponent},
          {path:'parameters', component: ParametersComponent},
          {path:'execute', component: ExecuteComponent}

        ]
      },
      { path: '', component: ViewSamplesComponent}, 
      { path: 'view-samples', component: ViewSamplesComponent}
   ] 
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProjectRoutingModule { }
