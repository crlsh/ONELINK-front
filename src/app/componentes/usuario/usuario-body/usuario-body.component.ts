import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DatosServiceService } from 'src/app/servicios/api/datos-service.service';
import { Redes } from 'src/app/servicios/interfaces/redes';

@Component({
  selector: 'app-usuario-body',
  templateUrl: './usuario-body.component.html',
  styleUrls: ['./usuario-body.component.scss']
})
export class UsuarioBodyComponent implements OnInit {

  @Input() idpersonas!: any;
  redes!: Redes [];

  constructor( private datosDb : DatosServiceService, public auth: AuthService) { }

  ngOnInit(): void {
    console.log(this.idpersonas);
    this.buscarRedes();
  }

  buscarRedes(): void {
    this.datosDb.search("redes", this.idpersonas)
    .subscribe((datos) => { 
      console.log(datos)     
      this.redes = datos;
      console.log(this.redes);      
      
    });
    
  }

}
