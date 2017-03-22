import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleRoutingModule } from './sample-routing.module';
import { SampleComponent } from './sample.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StepsModule } from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {FileUploadModule} from 'primeng/primeng';

import { MetadataComponent } from './metadata/metadata.component';
import { UploadComponent } from './upload/upload.component';
import { ParametersComponent } from './parameters/parameters.component';
import { ExecuteComponent } from './execute/execute.component';

// services
import { SampleService } from '../../../services/sample/sample.service'
import { ConfirmationService } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    SampleRoutingModule,
    StepsModule,
    FormsModule,
    ReactiveFormsModule,
    GrowlModule,
    FileUploadModule
  ],
  providers: [
    ConfirmationService,
    SampleService
  ],
  declarations: [SampleComponent, MetadataComponent, UploadComponent, ParametersComponent, ExecuteComponent]
})
export class SampleModule { }
