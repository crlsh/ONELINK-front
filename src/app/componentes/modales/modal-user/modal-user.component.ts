import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DatosServiceService } from 'src/app/servicios/api/datos-service.service';
import { Persona } from 'src/app/servicios/interfaces/persona';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.scss']
})
export class ModalUserComponent implements OnInit {

  @Input() PerNueva!: boolean;
  @Input() id!:number;
  @Input() personasIdpersona!:String;
  @Input() persona!:any

      //red!:Redes;
    formPer: FormGroup;
    idpersonas: any;
  
  constructor(public activeModal: NgbActiveModal, private datosDb : DatosServiceService, private fb: FormBuilder) { 
      this.PerNueva = false;
      this.formPer = fb.group({
       
        idpersonas: [''],
        given_name: [''],
        family_name: [''],
        nickname: [''],
        picture: [''],
        descripcion: [''],
        imagen_fondo: [''], 
     })
    }
     
    ngOnInit(): void {
      if(this.PerNueva === false){                        
        this.armarFormulario();     
      }     
    }
 
  
    armarFormulario(){
      //console.log(this.red)
      this.formPer.setValue({     
        nombre: this.persona[0].given_name,
        apellido: this.persona[0].family_name,
        nickname: this.persona[0].nickname,
        foto: this.persona[0].picture,
        descripcion: this.persona[0].descripcion,
        imagen_fonde: this.persona[0].imagen_fondo,

      })  
    }
  
    enviarDatos(){
        
      if(this.PerNueva === true){
        //console.log("nada")
        this.persona = this.formPer.value  
        
        this.crearPer();
      }else{
        this.armarModeloPer();
        this.editarPer();
      }
    }
  
    armarModeloPer(){    
      this.persona[0].given_name = this.formPer.value.given_name;
      this.persona[0].family_name = this.formPer.value.family_name;
      this.persona[0].nickname = this.formPer.value.nickname;
      this.persona[0].picture = this.formPer.value.picture;
      this.persona[0].descripcion = this.formPer.value.descripcion;
      this.persona[0].imagen_fondo = this.formPer.value.imagen_fonde;
    }  
  
    editarPer() {
    
      Swal.fire({
        title: '¿Desea guardar los cambios?',
        showDenyButton: true,
        //showCancelButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: `Cancelar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.actualizarPer()
          Swal.fire('¡Guardados!', '', 'success')
        
        
          
        } else if (result.isDenied) {
          Swal.fire('No se guardaron los cambios', '', 'info')
          this.activeModal.close(); 
        }
      })
      
    }
  
    actualizarPer(){
      this.datosDb.update(this.persona[0], "persona", this.persona[0].idpersonas).subscribe(() => {
        this.activeModal.close();     
    });
    }
  
    crearPer() {
      Swal.fire({
        title: '¿Desea hacer los cambios?',
        showDenyButton: true,
        //showCancelButton: true,
        confirmButtonText: 'Agregar',
        denyButtonText: `Cancelar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('¡Actualizado!', '', 'success');
          this.agregarPer();
        } else if (result.isDenied) {
          Swal.fire('No se hizo el cambio', '', 'info')
          this.activeModal.close(); 
        }
      })
    }
  
    agregarPer(){
      this.persona.idpersonas = this.idpersonas;
      this.persona.picture = ""
      //console.log(this.red)
      this.datosDb.save(this.persona, "persona").subscribe(() => {
        this.activeModal.close();     
    }); 
    }
  }


  