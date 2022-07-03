import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-btn-logout',
  templateUrl: './btn-logout.component.html',
  styleUrls: ['./btn-logout.component.scss']
})
export class BtnLogoutComponent implements OnInit {

  constructor(public auth: AuthService, @Inject(DOCUMENT) private doc: Document) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }

}
