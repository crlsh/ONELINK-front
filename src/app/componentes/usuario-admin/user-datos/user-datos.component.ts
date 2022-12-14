import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
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


  persona!:Persona[];
  profileJson:any;
  constructor(private datosDb : DatosServiceService, private modalService: NgbModal, public auth: AuthService) { 
    
  }

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

  guardarNickname(nickname: string){
    
    Swal.fire({
      title: '??Desea cambiar el usuario?',
      showDenyButton: true,
      //showCancelButton: true,
      confirmButtonText: 'Cambiar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */      
      if (result.isConfirmed) {     
        this.persona[0].nickname = nickname 
        console.log(this.persona[0])
        this.datosDb.update(this.persona[0], "persona", this.persona[0].idpersonas).subscribe((respuesta) => {
          if(respuesta){
            Swal.fire('??Modificado!', '', 'success');                
          } else {
            Swal.fire('Ese usuario ya existe, por favor ingresa otro', '', 'info');        
          }          
      });  
      } else if (result.isDenied) {
        Swal.fire('No se guardaron los cambios', '', 'info')        
      }
    })
  }

  /* 
  eliminarPer(id:number){
      
    Swal.fire({
      title: '??Desea borrar el contacto?',
      text: "No se podr?? revertir esta acci??n!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.eliminarPer(id); 
        Swal.fire(
          '??Borrado!',
        );
       
      }
    })
  }
   */
  
}
