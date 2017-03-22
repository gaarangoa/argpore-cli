import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';

export const router: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'dashboard/project/:pid', redirectTo:'project/:pid', pathMatch:'full', data:{type: 'project'}} // The project button inside the dashboard
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(router);

