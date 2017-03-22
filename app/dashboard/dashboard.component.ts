import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// services
import { Session }      from '../../services/session/session.service';


@Component({
  // selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    user = Object;

  constructor(
    private session:Session,
    private router: Router
  ) {

    this.user = this.session.get('user');

    if(!this.session.get('isLoggedIn')){
      this.router.navigate(['login']);
    }

  }

  ngOnInit() {
  }

}
