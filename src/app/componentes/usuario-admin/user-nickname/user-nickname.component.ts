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
  }

  constructor(private datosDb : DatosServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  guardarNickname(nickname: string){
    Swal.fire({
      title: '¿Desea agregar el contacto?',
      showDenyButton: true,
      //showCancelButton: true,
      confirmButtonText: 'Agregar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.crearUsuario(nickname);
        Swal.fire('¡Agregado!', '', 'success');    
         
      } else if (result.isDenied) {
        Swal.fire('No se guardó el nickname', '', 'info')
        //this.activeModal.close(); 
      }
    })
  }

  crearUsuario(nickname:string) {
    //console.log(this.user)
    this.armarPersona(nickname)
    this.datosDb.save(this.persona, "persona").subscribe(() => {
      this.router.navigate(['admin']);
  }); 

  }

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
