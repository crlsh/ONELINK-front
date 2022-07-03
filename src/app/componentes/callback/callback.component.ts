import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  public profileJson: any ;

  constructor(public auth: AuthService, private router: Router) { }
 
  ngOnInit(): void {
    this.auth.user$
    .subscribe((profile) => {
      this.profileJson = profile
      console.log(this.profileJson.nickname); 
      this.paginaUsuario();     
      
    });    
    
  }

  paginaUsuario(): void {
    this.router.navigate([`${this.profileJson.nickname}`])
  } 

}
