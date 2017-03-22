import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';

import { SampleModule } from './sample/sample.module';
import { ViewSamplesComponent } from './view-samples/view-samples.component';

import { StepsModule } from 'primeng/primeng';

import { DataTableModule, SharedModule, GrowlModule } from 'primeng/primeng';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';

// import {NgxChartsModule} from '@swimlane/ngx-charts';
import {BrowserModule} from '@angular/platform-browser'

import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
export function highchartsFactory() {
  return require('highcharts');
}


@NgModule({
  imports: [
    CommonModule,
    SampleModule,
    ProjectRoutingModule,
    StepsModule,
    DataTableModule,
    SharedModule,
    GrowlModule,
    ConfirmDialogModule,
    BrowserModule,
    ChartModule
    // NgxChartsModule,
    // BrowserModule
  ],
  providers: [
    ConfirmationService,
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }
  ],
  declarations: [ProjectComponent, ViewSamplesComponent]
})
export class ProjectModule { }
