// components
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';

// services
import { Session }      from '../../services/session/session.service';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  // selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  message: string;
  loginForm : FormGroup;
  registerForm: FormGroup;

  constructor(private authService: AuthService, 
              public router: Router, 
              private session:Session,
              public fb: FormBuilder ){ 

                this.registerForm = this.fb.group({
                    'fullname':[undefined, [Validators.required]],
                    'email': [undefined, [Validators.required]],
                    'password':[undefined, [Validators.required, Validators.minLength(8)]],
                    'repassword':[undefined, [Validators.required, Validators.minLength(8)]],
                    'institution':[undefined, [Validators.required]],
                  });

                this.loginForm = this.fb.group({
                    'email': [undefined, [Validators.required]],
                    'password':[undefined, [Validators.required]],

                  });
                
                if(this.session.get('isLoggedIn')){
                  this.router.navigate(['dashboard']);
                }
                  
              }

  login() {
        this.authService.login(this.loginForm.value['email'], this.loginForm.value['password'])
          .subscribe(() => {
            if(this.session.get('isLoggedIn')){
               this.router.navigate(['dashboard']);
            }else{
              this.message="Error Username or password"
            }
        });
      }
  
  signup(){
      
      this.authService.signup( this.registerForm.value )
        .subscribe(user => {
          console.log(this.authService.credentials)  
          this.router.navigate(['dashboard']);         
        });
  }


}
