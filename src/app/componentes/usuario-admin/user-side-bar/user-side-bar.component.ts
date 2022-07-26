import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/servicios/interfaces/persona';
import { Redes } from 'src/app/servicios/interfaces/redes';

@Component({
  selector: 'app-user-side-bar',
  templateUrl: './user-side-bar.component.html',
  styleUrls: ['./user-side-bar.component.scss']
})
export class UserSideBarComponent implements OnInit {

  @Input() persona!: Persona;
  @Input() redes!: Redes[];

  constructor() { }

  ngOnInit(): void {
  }

}
