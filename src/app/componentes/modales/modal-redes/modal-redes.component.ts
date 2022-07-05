import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DatosServiceService } from 'src/app/servicios/api/datos-service.service';
import { Redes } from 'src/app/servicios/interfaces/redes';

@Component({
  selector: 'app-modal-redes',
  templateUrl: './modal-redes.component.html',
  styleUrls: ['./modal-redes.component.scss']
})
export class ModalRedesComponent implements OnInit {

  @Input()  redNueva!:boolean;
  @Input()  id!:number;

  
  red!:Redes;
  formRed: FormGroup;

  constructor(public activeModal: NgbActiveModal, private datosDb : DatosServiceService, private fb: FormBuilder) {
    this.redNueva = false;
    this.formRed = fb.group({
      idredes: [''],
      nombre_red: [''],
      link: [''],
      icono: [''],
      personasIdpersonas: [''],
        
   })

  }
   

  ngOnInit(): void {
    this.buscarRedId(this.id);
  }

  buscarRedId(id:number){
    this.datosDb.getById("redes", id).subscribe((datos)=> {
      this.red=datos;
      this.armarFormulario();
    }
    )
  }

  armarFormulario(){
    this.formRed.setValue({
      idredes: this.id,
      nombre_red: this.red.nombre_red,
      link: this.red.link,
      icono: this.red.icono,
      personasIdpersonas: this.red.personasIdpersonas
    })  
  }

  enviarDatos(){
      
    if(this.redNueva === true){
      console.log("nada")
    }else{
      this.armarModeloRed();
      this.actualizarRed();
    }
  }

  armarModeloRed(){
    
    this.red.idredes = this.formRed.value.idredes;
    this.red.nombre_red = this.formRed.value.nombre_red;
    this.red.link = this.formRed.value.link;
    this.red.icono = this.formRed.value.icono;
    this.red.personasIdpersonas = this.formRed.value.personasIdpersonas;
  }

  actualizarRed(){
    this.datosDb.update(this.red, "redes", this.id).subscribe(() => {
      this.activeModal.close();     
  });
  }


}
