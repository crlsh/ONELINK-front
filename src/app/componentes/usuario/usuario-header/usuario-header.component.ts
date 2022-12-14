import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Persona } from 'src/app/servicios/interfaces/persona';
import { ThemeService } from 'src/app/servicios/theme/theme.service';

@Component({
  selector: 'app-usuario-header',
  templateUrl: './usuario-header.component.html',
  styleUrls: ['./usuario-header.component.scss']
})
export class UsuarioHeaderComponent implements OnInit {

  @Input() persona!: Persona;  
  cambioEstilo:boolean = false;
  estilo!: string;
  modoOscuro!:boolean;
  @HostBinding('class') componentCssClass: any; 
  bgColor!: string | null;
  background:string = "oscuro"
  background2:string = "witching-hour"

  constructor(public auth: AuthService, public overlayContainer: OverlayContainer, private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.estadoModoOscuro().subscribe((modoOscuro) => (this.modoOscuro = modoOscuro));
   // this.setearBg();   
   this.colorTexto();
  
  }

  public onSetTheme (e: string){
    //console.log(this.estilo);
    this.overlayContainer.getContainerElement().classList.add(e);
    this.componentCssClass = e;
    this.themeService.cambioEstiloFalso();
   // console.log(this.cambioEstilo);
  }

  colorTexto(){
    //console.log("11111111111111111111111111111111")
    if(this.persona.background === this.background || this.persona.background === this.background2){
        this.modoOscuro=true;
        console.log(this.modoOscuro)
    }else{
      this.modoOscuro=false;
    }
  }

 

}
