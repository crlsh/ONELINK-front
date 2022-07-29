import { Component, OnInit } from '@angular/core';
import { DatosServiceService } from 'src/app/servicios/api/datos-service.service';
import { Persona } from 'src/app/servicios/interfaces/persona';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-user-estilos',
  templateUrl: './user-estilos.component.html',
  styleUrls: ['./user-estilos.component.scss']
})
export class UserEstilosComponent implements OnInit {

  persona!:Persona[];
  profileJson:any;

  constructor(private datosDb : DatosServiceService, public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$
    .subscribe((profile) => {
      this.profileJson = profile,      
      this.buscarUsuario(this.profileJson.email); //busca el usuario en la bd  
   
  });
  }

  buscarUsuario(user:string){
    this.datosDb.search("persona", user)
    .subscribe((datos) => {      
      this.persona = datos;                        //guarda el usuario en persona. si no hay nada, persona queda vacio
         
    
    });
  
  }

}
