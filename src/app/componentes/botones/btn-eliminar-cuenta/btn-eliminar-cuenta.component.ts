import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosServiceService } from 'src/app/servicios/api/datos-service.service';
import { Persona } from 'src/app/servicios/interfaces/persona';

@Component({
  selector: 'app-btn-eliminar-cuenta',
  templateUrl: './btn-eliminar-cuenta.component.html',
  styleUrls: ['./btn-eliminar-cuenta.component.scss']
})
export class BtnEliminarCuentaComponent implements OnInit {

  @Input() persona!: Persona [];

  constructor(private router: Router, private datosDb : DatosServiceService) { }

  ngOnInit(): void {
    console.log(this.persona)
  }

  eliminarCuenta(id: number){
    console.log(id)
      this.datosDb.delete("persona", id).subscribe((datos)=>{
      this.router.navigate(['']);
    }) 
  }


}
