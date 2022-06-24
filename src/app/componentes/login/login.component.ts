import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DatosServiceService } from 'src/app/servicios/api/datos-service.service';
import { Persona } from 'src/app/servicios/interfaces/persona';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  persona!: Persona;
  formulario!: FormGroup; // crear una variable para el formulario


  constructor(){}

  //nosotros el en front esta        (private router: Router, private userService: UserService, private formBuilder: FormBuilder, private autenticationServ: AutenticationService) {
  /* constructor(private router: Router, private personaService: PersonaService, private formBuilder: FormBuilder, private datosServices: DatosService)  { // inyecta el formbuilder para los formularios reactivos
  

    // crea el formulario con los campos necesarios
  this.formulario = this.formBuilder.group({
    user: ['', Validators.required],
    pass: ['', Validators.required]
  });
} */

get user() {
  return this.formulario.get('user');
}

get pass() {
  return this.formulario.get('pass');
}

  ngOnInit(): void {

    //pedir el post-asi esta en front nuestro       this.userService.login( this.formulario.value.username, this.formulario.value.password).subscribe(
 /*    this.personaService.login( this.formulario.value.user, this.formulario.value.pass).subscribe(
      data => {
        console.log(this.persona);
        localStorage.setItem("persona", JSON.stringify(this.persona));
        this.volverAlHome();
      }
    ); */
  }

  volverAlHome() {
    /* this.router.navigate(['']); */
  }

  login() {
    /* console.log(this.formulario.value);
    // asi esta en el nuestro "this.autenticationServ.IniciarSesion(this.formulario.value.username, this.formulario.value.password).subscribe( data => {"
      this.personaService.login(this.formulario.value.user, this.formulario.value.pass).subscribe (
       data => {
        console.log(data);
        this.volverAlHome();
      }
    );
  }
 */
}
}