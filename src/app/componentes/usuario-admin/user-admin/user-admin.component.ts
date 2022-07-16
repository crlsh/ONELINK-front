import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

import { DatosServiceService } from 'src/app/servicios/api/datos-service.service';
import { Persona } from 'src/app/servicios/interfaces/persona';
import { Redes } from 'src/app/servicios/interfaces/redes';


@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.scss']
})
export class UserAdminComponent implements OnInit {

  public profileJson: any ;
  persona!: Persona[];
  redes!: Redes [];  
  usuarioNuevo:boolean;
 
  constructor(public auth: AuthService, private router: Router, private datosDb : DatosServiceService) { 
    this.usuarioNuevo = false
  }

  ngOnInit(): void {
    this.auth.user$
    .subscribe((profile) => {
      this.profileJson = profile
      //console.log(this.profileJson.email); 
    this.buscarUsuario(this.profileJson.email); //busca el usuario en la bd  

  })
}

buscarUsuario(user:string){
  this.datosDb.search("persona", user)
  .subscribe((datos) => {      
    this.persona = datos;                               //guarda el usuario en persona. si no hay nada, persona queda vacio
    this.comprobarUsuario()                            
    //console.log(this.persona);      
  
  });

}

comprobarUsuario(){
  if(this.persona.length === 0){
    this.usuarioNuevo=true;
    console.log(this.usuarioNuevo)
    console.log("usuario nuevo")
  }else{
    console.log("usuario existente")
    console.log(this.usuarioNuevo)
    this.buscarRedes(this.persona[0].idpersonas);       //busca las redes de esa persona con el idpersonas
  }
}

buscarRedes(id:any): void {
  //console.log(id)
  this.datosDb.search("redes", id)
  .subscribe((datos) => { 
    //console.log(datos)     
    this.redes = datos;                                 //guarda las redes del usuario en redes
    //console.log(this.redes);    
    
  });
  
}


}