import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/servicios/interfaces/persona';
import { ThemeService } from 'src/app/servicios/theme/theme.service';

@Component({
  selector: 'app-usuario-cuerpo-principal',
  templateUrl: './usuario-cuerpo-principal.component.html',
  styleUrls: ['./usuario-cuerpo-principal.component.scss']
})
export class UsuarioCuerpoPrincipalComponent implements OnInit {

  @Input() persona!: Persona;

  @HostBinding('class') componentCssClass: any; 
  cambioEstilo:boolean = false;
  estilo!: string| null;
  modoOscuro!:boolean; 
  background!:string; 

  constructor( public overlayContainer: OverlayContainer, private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.estadoModoOscuro().subscribe((modoOscuro) => (this.modoOscuro = modoOscuro));
    /* if (localStorage.getItem('modoOscuro')) {
     	this.themeService.modoOscuroOn();      
    }    */
   /*  if (localStorage.getItem('theme')) {
      this.estilo = localStorage.getItem('theme');
      console.log(this.estilo);
      this.onSetTheme(this.estilo);
   }   */
    this.estilo = this.persona.theme
    this.onSetTheme(this.estilo)
  }

  public onSetTheme (e: any){
   // console.log(this.estilo);
    this.overlayContainer.getContainerElement().classList.add(e);
    this.componentCssClass = e;
    this.themeService.cambioEstiloFalso();
   // console.log(this.cambioEstilo);
  }



}
