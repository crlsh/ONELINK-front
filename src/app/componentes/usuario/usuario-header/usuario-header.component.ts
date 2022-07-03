import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Persona } from 'src/app/servicios/interfaces/persona';

@Component({
  selector: 'app-usuario-header',
  templateUrl: './usuario-header.component.html',
  styleUrls: ['./usuario-header.component.scss']
})
export class UsuarioHeaderComponent implements OnInit {

  @Input() persona: Persona;

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
