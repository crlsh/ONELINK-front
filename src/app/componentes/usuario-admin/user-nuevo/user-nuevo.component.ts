import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { DatosServiceService } from 'src/app/servicios/api/datos-service.service';
import { Persona } from 'src/app/servicios/interfaces/persona';

@Component({
  selector: 'app-user-nuevo',
  templateUrl: './user-nuevo.component.html',
  styleUrls: ['./user-nuevo.component.scss']
})
export class UserNuevoComponent implements OnInit {

  @Input() perfil!: Persona;
  user:any;

  constructor(public auth: AuthService ) { 
    this.auth.user$
    .subscribe((profile) => {
      this.user = profile
      console.log(this.user); 
      
  })
    
  }

  ngOnInit(): void {
  }

}
