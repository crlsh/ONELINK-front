import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-btn-authentication',
  templateUrl: './btn-authentication.component.html',
  styleUrls: ['./btn-authentication.component.scss']
})
export class BtnAuthenticationComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
