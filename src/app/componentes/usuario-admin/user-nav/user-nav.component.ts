import { BreakpointObserver } from '@angular/cdk/layout';
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
  pantallasPequenias!:boolean;

  constructor(private responsive: BreakpointObserver) { }

  ngOnInit(): void {
    this.responsive.observe('(max-width: 992px)')                               //comprueba si la pantalla es pequeña y modifica el valor de la variable
  .subscribe(result => {

    this.pantallasPequenias = false; 

    if (result.matches) {
      this.pantallasPequenias = true;     
    } 
  })
  }

}
