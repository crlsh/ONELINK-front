import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/servicios/interfaces/persona';
import { ThemeService } from 'src/app/servicios/theme/theme.service';

@Component({
  selector: 'app-usuario-footer',
  templateUrl: './usuario-footer.component.html',
  styleUrls: ['./usuario-footer.component.scss']
})
export class UsuarioFooterComponent implements OnInit {

  @Input() persona!: Persona;
  @HostBinding('class') componentCssClass: any; 
  cambioEstilo:boolean = false;
  estilo!: string;

  constructor(public overlayContainer: OverlayContainer, private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.estadoEstilo().subscribe((estado) => {
      this.cambioEstilo = estado;
      if(this.cambioEstilo === true) {
        this.estilo = this.themeService.current
        console.log(this.estilo);
        this.onSetTheme(this.estilo);
      }
    });
  }

  public onSetTheme (e: string){
    console.log(this.estilo);
    this.overlayContainer.getContainerElement().classList.add(e);
    this.componentCssClass = e;
    this.themeService.cambioEstiloFalso();
    console.log(this.cambioEstilo);
  }

}
