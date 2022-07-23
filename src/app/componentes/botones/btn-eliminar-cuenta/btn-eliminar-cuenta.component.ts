import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosServiceService } from 'src/app/servicios/api/datos-service.service';
import { Persona } from 'src/app/servicios/interfaces/persona';
import { Redes } from 'src/app/servicios/interfaces/redes';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-btn-eliminar-cuenta',
  templateUrl: './btn-eliminar-cuenta.component.html',
  styleUrls: ['./btn-eliminar-cuenta.component.scss']
})
export class BtnEliminarCuentaComponent implements OnInit {

  @Input() persona!: Persona [];
  @Input() redes!:Redes[];

  constructor(private router: Router, private datosDb : DatosServiceService) { }

  ngOnInit(): void {
    //console.log(this.persona)
  }

  eliminarCuenta(id: number){    
    Swal.fire({
      title: '¿Esta seguro que desea borrar su cuenta?',
      text: "Esta acción no se podrá revertir y perderá todos sus links",
      icon: 'warning',
      showDenyButton: true,
      //showCancelButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */      
      if (result.isConfirmed) {  
        this.borrarTodasRedes();
        this.datosDb.delete("persona", id).subscribe(()=> {
          Swal.fire('¡Su cuenta se ha eliminado!', '', 'success');    
          this.router.navigate(['']) 
          /* if(respuesta){
            Swal.fire('¡Su cuenta se ha eliminado!', '', 'success');    
            this.router.navigate([''])     
          } else {
            Swal.fire('Ha ocurrido un error, por favor intente nuevamente', '', 'info');        
          }           */
      });  
      } else if (result.isDenied) {
        Swal.fire('Se ha cancelado la operación', '', 'info')        
      }
    })
  }

  borrarRedes(id: number) {
    //console.log(id)
    this.datosDb.delete("redes", id).subscribe((datos) => {
      //this.ngOnInit()
    })
  }

  borrarTodasRedes() {
    console.log(this.redes)
    this.redes.forEach(elem => { this.borrarRedes(elem.idredes) })

  }


}
