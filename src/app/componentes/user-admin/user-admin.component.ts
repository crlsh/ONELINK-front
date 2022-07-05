import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatosServiceService } from 'src/app/servicios/api/datos-service.service';
import { Persona } from 'src/app/servicios/interfaces/persona';
import { Redes } from 'src/app/servicios/interfaces/redes';
import { ModalRedesComponent } from '../modales/modal-redes/modal-redes.component';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.scss']
})
export class UserAdminComponent implements OnInit {

  public profileJson: any ;
  persona!: Persona[];
  redes!: Redes [];
 
  constructor(public auth: AuthService, private router: Router, private datosDb : DatosServiceService, private modalService: NgbModal,) { 
  
  }

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

actualizarRedes(red:Redes, id:number){
  this.datosDb.update(red, "redes", id).subscribe((datos) =>{
    console.log(datos)
  })
}

borrarRedes(id:number){
  console.log(id)
  this.datosDb.delete("redes", id).subscribe((datos) => {
    this.ngOnInit()
  })
}

paginaUsuario(): void {
  this.router.navigate([`${this.profileJson.nickname}`])
} 

public getInputValue(inputValue:string, inputValue2:string){
  console.log(inputValue + " " + inputValue2);
}

abrirModal(id:number){
  const modalRef = this.modalService.open(ModalRedesComponent,  { centered: true });      //abre el modal y lo centra  
  modalRef.componentInstance.id = id;                                                         //le pasa el id del elemento a modificar

  modalRef.result.then((data) => {                                                            //cuando se cierra el modal actualiza la vista del componente  
    this.ngOnInit();
  }, (reason) => {
  
  })
}

abrirModalVacio(){
  const modalRef = this.modalService.open(ModalRedesComponent,  { centered: true });      //abre el modal y lo centra  
  modalRef.componentInstance.redNueva = true;                                                         //le pasa el id del elemento a modificar
  modalRef.componentInstance.personasIdpersonas = this.persona[0].idpersonas;    
  modalRef.result.then((data) => {                                                            //cuando se cierra el modal actualiza la vista del componente  
    this.ngOnInit();
  }, (reason) => {
  
  })
}



}