import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/servicios/interfaces/persona';

@Component({
  selector: 'app-usuario-nav',
  templateUrl: './usuario-nav.component.html',
  styleUrls: ['./usuario-nav.component.scss']
})
export class UsuarioNavComponent implements OnInit {

  @Input() persona!: Persona

  constructor() { }

  ngOnInit(): void {
   // console.log(this.persona)
  }

}
