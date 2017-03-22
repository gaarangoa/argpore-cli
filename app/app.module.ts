import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// Services
import { AuthService } from '../services/auth/auth.service';
import {Session} from '../services/session/session.service';
import {CookieService} from 'angular2-cookie/core';

// modules
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProjectModule } from './project/project.module';
import { SampleModule } from './project/sample/sample.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SampleModule,
    ProjectModule,
    DashboardModule,
    AppRoutingModule,
  ],
  providers: [
    AuthService,
    Session,
    CookieService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

