import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DatosServiceService } from 'src/app/servicios/api/datos-service.service';
import { Persona } from 'src/app/servicios/interfaces/persona';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  
  persona!: Persona;
  user!: any;
  pantallasPequenias!:boolean

  constructor(public auth: AuthService, private datosDb: DatosServiceService, private responsive: BreakpointObserver) { }

  ngOnInit(): void {
   
  if(this.auth.isAuthenticated$){
    this.auth.user$
    .subscribe((profile) => {
      this.user = profile      
      console.log (this.user)
  })
  }
  this.responsive.observe('(max-width: 992px)')                               //comprueba si la pantalla es pequeña y modifica el valor de la variable
  .subscribe(result => {

    this.pantallasPequenias = false; 

    if (result.matches) {
      this.pantallasPequenias = true;     
    } 
  })

  }
}