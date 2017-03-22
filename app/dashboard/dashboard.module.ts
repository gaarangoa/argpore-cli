import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NewProjectComponent } from './new-project/new-project.component';

import { ProjectService } from '../../services/project/project.service';
import { MyProjectsComponent } from './my-projects/my-projects.component';


import { ConfirmDialogModule } from 'primeng/primeng';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule
  ],
  declarations: [
    DashboardComponent, 
    NewProjectComponent, 
    MyProjectsComponent
    ],
  providers:[
    ProjectService
  ]
})
export class DashboardModule { 

}
