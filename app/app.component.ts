import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

// services
import { Session } from '../services/session/session.service';
import { AuthService } from '../services/auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private session: Session, private authService: AuthService){
    
  }

  logout(){
    this.authService.logout(); 
  }


}
