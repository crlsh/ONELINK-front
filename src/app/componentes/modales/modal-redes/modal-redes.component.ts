import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DatosServiceService } from 'src/app/servicios/api/datos-service.service';
import { Redes } from 'src/app/servicios/interfaces/redes';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-modal-redes',
  templateUrl: './modal-redes.component.html',
  styleUrls: ['./modal-redes.component.scss']
})
export class ModalRedesComponent implements OnInit {

  @Input() redNueva!: boolean;
  @Input() id!: number;
  @Input() personasIdpersonas!: string;
  @Input() red!: any

  //red!:Redes;
  isSubmitted = false;
  formRed: FormGroup;
  Redes: any = ['Facebook', 'Instagram', 'Linkedin', 'Otra'];

  changeRed(e: any) {
    this.red.nombre_red?.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  // Access formcontrols getter
  get nombre_red() {
    return this.formRed.get('nombre_red');
  }

  get link(){
    return this.formRed.get('link');
  }

  constructor(public activeModal: NgbActiveModal, private datosDb: DatosServiceService, private fb: FormBuilder) {
    this.redNueva = false;
    this.formRed = fb.group({

      nombre_red: [''],
      link: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],

    })
  }



  ngOnInit(): void {
    if (this.redNueva === false) {
      this.armarFormulario();
    }
  }

  armarFormulario() {
    //console.log(this.red)
    this.formRed.setValue({
      nombre_red: this.red[0].nombre_red,
      link: this.red[0].link,
    })
  }

  enviarDatos() {

    if (this.redNueva === true) {
      //console.log("nada")
      this.red = this.formRed.value

      this.crearRed();
    } else {
      this.armarModeloRed();
      this.editarRed();
    }
  }

  armarModeloRed() {
    this.red[0].nombre_red = this.formRed.value.nombre_red;
    this.red[0].link = this.formRed.value.link;
  }

  editarRed() {

    Swal.fire({
      title: '¿Desea guardar los cambios?',
      showDenyButton: true,
      //showCancelButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.actualizarRed()
        Swal.fire('¡Guardados!', '', 'success')



      } else if (result.isDenied) {
        Swal.fire('No se guardaron los cambios', '', 'info')
        this.activeModal.close();
      }
    })

  }

  actualizarRed() {
    this.datosDb.update(this.red[0], "redes", this.red[0].idredes).subscribe(() => {
      this.activeModal.close();
    });
  }

  crearRed() {
    Swal.fire({
      title: '¿Desea agregar Red',
      showDenyButton: true,
      //showCancelButton: true,
      confirmButtonText: 'Agregar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('¡Agregado!', '', 'success');
        this.agregarRed();
      } else if (result.isDenied) {
        Swal.fire('No se agregó la red', '', 'info')
        this.activeModal.close();
      }
    })
  }

  agregarRed() {
    this.red.personas_idpersonas = this.personasIdpersonas;
    this.red.icono = ""
    //console.log(this.red)
    this.datosDb.save(this.red, "redes").subscribe(() => {
      this.activeModal.close();
    });
  }
}
