import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/servicios/interfaces/persona';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Input() persona!: Persona;

  constructor() { }

  ngOnInit(): void {
    console.log(this.persona)
  }

}
