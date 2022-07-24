import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/servicios/interfaces/persona';

@Component({
  selector: 'app-usuario-footer',
  templateUrl: './usuario-footer.component.html',
  styleUrls: ['./usuario-footer.component.scss']
})
export class UsuarioFooterComponent implements OnInit {

  @Input() persona!: Persona;

  constructor() { }

  ngOnInit(): void {
  }

}
