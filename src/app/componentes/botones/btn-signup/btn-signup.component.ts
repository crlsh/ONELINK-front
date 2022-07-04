import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-btn-signup',
  templateUrl: './btn-signup.component.html',
  styleUrls: ['./btn-signup.component.scss']
})
export class BtnSignupComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  loginWithRedirect(): void {
    this.auth.loginWithRedirect({ screen_hint: 'signup' });
  }

}
