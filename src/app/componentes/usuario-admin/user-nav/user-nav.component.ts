import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/servicios/interfaces/persona';
import { Redes } from 'src/app/servicios/interfaces/redes';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.scss']
})
export class UserNavComponent implements OnInit {

  @Input() persona!: Persona [];
  @Input() redes!: Redes[];

  constructor() { }

  ngOnInit(): void {
  }

}
