import { BreakpointObserver } from '@angular/cdk/layout';
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
  pantallasPequenias!:boolean;

  constructor(private responsive: BreakpointObserver) { }

  ngOnInit(): void {
    this.responsive.observe('(max-width: 992px)').subscribe(result => {                         //comprueba si la pantalla es pequeña y modifica el valor de la variable

    this.pantallasPequenias = false; 

    if (result.matches) {
      this.pantallasPequenias = true;     
    } 
  })
  }

}
