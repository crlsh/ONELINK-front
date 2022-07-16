import { Component, Input, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatosServiceService } from 'src/app/servicios/api/datos-service.service';

import { Redes } from 'src/app/servicios/interfaces/redes';
import Swal from 'sweetalert2';
import { ModalRedesComponent } from '../../modales/modal-redes/modal-redes.component';

@Component({
  selector: 'app-user-redes',
  templateUrl: './user-redes.component.html',
  styleUrls: ['./user-redes.component.scss']
})
export class UserRedesComponent implements OnInit {

  @Input() redes!:Redes[];
  @Input() idpersonas!:string;

  
  red!: Redes[];
  
 
  constructor(private datosDb : DatosServiceService, private modalService: NgbModal,) { 
  
  }

  ngOnInit(): void {
   this.buscarRedes(this.idpersonas)
  console.log(this.redes)
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


abrirModal(id:number){
  this.buscarRedId(id);                                                                     // busca la red por el idredes y envia todo el objeto red al modal
  //console.log(this.red)
  const modalRef = this.modalService.open(ModalRedesComponent,  { centered: true });      //abre el modal y lo centra  
  modalRef.componentInstance.red = this.red;                                                         //le pasa el id del elemento a modificar

  modalRef.result.then((data) => {                                                            //cuando se cierra el modal actualiza la vista del componente  
    this.ngOnInit();
  }, (reason) => {
  
  })
}

buscarRedId(id:number){
  this.red = this.redes.filter(function(redes:any){
    return redes.idredes === id
})
}

abrirModalVacio(){
  const modalRef = this.modalService.open(ModalRedesComponent,  { centered: true });      //abre el modal y lo centra  
  modalRef.componentInstance.redNueva = true;                                                         //le pasa el id del elemento a modificar
  modalRef.componentInstance.personasIdpersonas = this.idpersonas;    
  modalRef.result.then((data) => {                                                            //cuando se cierra el modal actualiza la vista del componente  
    this.ngOnInit();
  }, (reason) => {
  
  })
}

eliminarRed(id:number){
    
  Swal.fire({
    title: '¿Desea borrar el contacto?',
    text: "No se podrá revertir esta acción!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Borrar'
  }).then((result) => {
    if (result.isConfirmed) {
      this.borrarRedes(id); 
      Swal.fire(
        '¡Borrado!',
      );
     
    }
  })
}



borrarRedes(id:number){
  //console.log(id)
  this.datosDb.delete("redes", id).subscribe((datos) => {
    this.ngOnInit()
  })
}


}
