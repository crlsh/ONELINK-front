import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosServiceService } from 'src/app/servicios/api/datos-service.service';
import { Persona } from 'src/app/servicios/interfaces/persona';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-nickname',
  templateUrl: './user-nickname.component.html',
  styleUrls: ['./user-nickname.component.scss']
})
export class UserNicknameComponent implements OnInit {

  @Input() user:any;

  persona:Persona = {
    idpersonas: "",
    given_name: "",
    family_name: "",
    nickname: "",
    picture: "",
    descripcion: "",
    imagen_fondo: "",
    id: "",
  }

  constructor(private datosDb : DatosServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  guardarNickname(nickname: string){
    this.armarPersona(nickname)
    Swal.fire({
      title: '¿Desea guardar el usuario?',
      showDenyButton: true,
      //showCancelButton: true,
      confirmButtonText: 'Agregar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */      
      if (result.isConfirmed) {      
        this.datosDb.save(this.persona, "persona").subscribe((respuesta) => {
          if(respuesta){
            Swal.fire('¡Agregado!', '', 'success');    
            this.router.navigate(['admin'])     
          } else {
            Swal.fire('Ese usuario ya existe, por favor ingresa otro', '', 'info');        
          }          
      });  
      } else if (result.isDenied) {
        Swal.fire('No se guardó el usuario', '', 'info')        
      }
    })
  }

  /* crearUsuario() {
   
    this.datosDb.save(this.persona, "persona").subscribe(() => {
      this.router.navigate(['admin'])   
  }); 

  } */

  armarPersona(nickname:string) {
   // console.log("pasa por aca?")
    this.persona.idpersonas = this.user.email;
    this.persona.given_name = this.user.given_name;
    this.persona.family_name = this.user.family_name;
    this.persona.nickname = nickname;
    this.persona.picture = this.user.picture;
    this.persona.imagen_fondo = "";
    this.persona.descripcion = "";
   // console.log(this.persona)
    
  }
  
}
