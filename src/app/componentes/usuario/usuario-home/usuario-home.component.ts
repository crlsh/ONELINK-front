import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { DatosServiceService } from 'src/app/servicios/api/datos-service.service';
import { Persona } from 'src/app/servicios/interfaces/persona';

@Component({
  selector: 'app-usuario-home',
  templateUrl: './usuario-home.component.html',
  styleUrls: ['./usuario-home.component.scss']
})
export class UsuarioHomeComponent implements OnInit {

  persona!: Persona;
  user!: string|null;
  loading: boolean;

  constructor(private activatedRouter: ActivatedRoute, private datosDb : DatosServiceService, private router: Router) { 
    this.user = this.activatedRouter.snapshot.paramMap.get('user');
    //console.log(this.user);
    this.loading=true;
  }

  ngOnInit(): void {
   //this.cargarDatos()
   this.buscarUsuario()
  }

 /*  cargarDatos(){
    this.datosDb.getAllPersonas("persona")
    .subscribe((datos) => {      
      console.log(datos);
    });
  } */

  buscarUsuario(){
    this.datosDb.search("persona", this.user)
    .subscribe((datos) => {      
      this.persona = datos;
      console.log(this.persona);      
      this.comprobarDatos();
    });
 
  }

  comprobarDatos(){
    if(Object.entries(this.persona).length === 0){
      console.log("vacio");
      this.router.navigate(['error']);
    }else{
      console.log("tiene datos");
      this.loading = false
    }
  }
  

}
