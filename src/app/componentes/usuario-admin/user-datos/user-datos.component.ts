import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatosServiceService } from 'src/app/servicios/api/datos-service.service';
import { Persona } from 'src/app/servicios/interfaces/persona';
import Swal from 'sweetalert2';
import { ModalUserComponent } from '../../modales/modal-user/modal-user.component';

@Component({
  selector: 'app-user-datos',
  templateUrl: './user-datos.component.html',
  styleUrls: ['./user-datos.component.scss']
})
export class UserDatosComponent implements OnInit {


  @Input() persona!:Persona[];
//  @Input() idpersonas!:string;


  
 
  constructor(private datosDb : DatosServiceService, private modalService: NgbModal) { 
    
  }

  ngOnInit(): void {
    console.log(this.persona)
  }

  abrirModal(id:number){
    this.buscarPersonaId(id);                                                                     // busca la red por el idredes y envia todo el objeto red al modal
    //console.log(this.red)
    const modalRef = this.modalService.open(ModalUserComponent,  { centered: true });      //abre el modal y lo centra  
    modalRef.componentInstance.persona = this.persona;                                                         //le pasa el id del elemento a modificar
  
    modalRef.result.then((data) => {                                                            //cuando se cierra el modal actualiza la vista del componente  
      this.ngOnInit();
    }, (reason) => {
    
    })
  }
  
  buscarPersonaId(id:number){
    this.persona = this.persona.filter(function(persona:any){
      return persona.idpersonas === id
  })
  }
  
  abrirModalVacio(){
    const modalRef = this.modalService.open(ModalUserComponent,  { centered: true });      //abre el modal y lo centra  
    //modalRef.componentInstance.PerNueva = true;                                                       
    modalRef.componentInstance.persona = this.persona;    
    modalRef.result.then((data) => {                                                            //cuando se cierra el modal actualiza la vista del componente  
      this.ngOnInit();
    }, (reason) => {
    
    })
  }
  /* 
  eliminarPer(id:number){
      
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
        this.eliminarPer(id); 
        Swal.fire(
          '¡Borrado!',
        );
       
      }
    })
  }
   */
  
}
