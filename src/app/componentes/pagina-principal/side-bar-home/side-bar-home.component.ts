import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-side-bar-home',
  templateUrl: './side-bar-home.component.html',
  styleUrls: ['./side-bar-home.component.scss']
})
export class SideBarHomeComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
