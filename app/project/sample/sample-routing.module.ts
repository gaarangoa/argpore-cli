import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProjectComponent} from '../project.component'

import {SampleComponent} from './sample.component'
import {UploadComponent} from './upload/upload.component';
import {MetadataComponent} from './metadata/metadata.component'



const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SampleRoutingModule { }
