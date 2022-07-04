import { Component, Input, OnInit } from '@angular/core';
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

  constructor(public auth: AuthService, private router: Router, private datosDb : DatosServiceService) { }

  ngOnInit(): void {
    this.auth.user$
    .subscribe((profile) => {
      this.profileJson = profile
      console.log(this.profileJson.nickname); 
    this.buscarUsuario(this.profileJson.nickname); 

  })
}

buscarUsuario(user:string){
  this.datosDb.search("persona", user)
  .subscribe((datos) => {      
    this.persona = datos;
    console.log(this.persona);      
    this.buscarRedes(this.persona[0].idpersonas);
  });

}

buscarRedes(id:any): void {
  console.log(id)
  this.datosDb.search("redes", id)
  .subscribe((datos) => { 
    console.log(datos)     
    this.redes = datos;
    console.log(this.redes);    
    
  });
  
}

paginaUsuario(): void {
  this.router.navigate([`${this.profileJson.nickname}`])
} 

}