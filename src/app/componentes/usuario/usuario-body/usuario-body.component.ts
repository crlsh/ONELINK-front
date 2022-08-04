import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { OverlayContainer} from '@angular/cdk/overlay';
import { AuthService } from '@auth0/auth0-angular';
import { DatosServiceService } from 'src/app/servicios/api/datos-service.service';
import { Redes } from 'src/app/servicios/interfaces/redes';
import { ThemeService } from 'src/app/servicios/theme/theme.service';

@Component({
  selector: 'app-usuario-body',
  templateUrl: './usuario-body.component.html',
  styleUrls: ['./usuario-body.component.scss']
})
export class UsuarioBodyComponent implements OnInit {

  @Input() idpersonas!: any;
  /* @Input() estilo!:string; */
  redes!: Redes[]; 
  @HostBinding('class') componentCssClass: any; 
  cambioEstilo:boolean = false;
  estilo!: string;
  modoOscuro!:boolean;

  selectIcon(nombre: String) {
    switch (nombre) {
      case 'Facebook': { return 'fa fa-facebook' }; break;
      case 'Instagram': { return 'fa fa-instagram' }; break;
      case 'Linkedin': { return 'fa fa-linkedin' }; break;
      case 'Github': { return 'fa fa-github' }; break;
      case 'Twitter': { return 'fa fa-twitter' }; break;
      case 'Pinterest': { return 'fa fa-pinterest' }; break;
      default: {
        return 'fa fa-user'
        break;
      }
    }
  }




  constructor(private datosDb: DatosServiceService, public auth: AuthService, public overlayContainer: OverlayContainer, private themeService: ThemeService) {

   }

  ngOnInit(): void {
    console.log(this.idpersonas);
    this.themeService.estadoEstilo().subscribe((estado) => {
      this.cambioEstilo = estado;
      if(this.cambioEstilo === true) {
        this.estilo = this.themeService.current
        console.log(this.estilo);
        this.onSetTheme(this.estilo);
      }
    });
    this.buscarRedes();
    this.themeService.estadoModoOscuro().subscribe((modoOscuro) => (this.modoOscuro = modoOscuro));
    this.setearBg();
    
    
  }

  buscarRedes(): void {
    this.datosDb.search("redes", this.idpersonas)
      .subscribe((datos) => {
        console.log(datos)
        this.redes = datos;
        console.log(this.redes);

      });

  }

 /*  public currentTheme() {
    this.estilo = this.themeService.current;
    this.onSetTheme(this.estilo)
  } */

  
  public onSetTheme (e: string){
    console.log(this.estilo);
    this.overlayContainer.getContainerElement().classList.add(e);
    this.componentCssClass = e;
    this.themeService.cambioEstiloFalso();
    console.log(this.cambioEstilo);
  }

  setearBg(){
    if(this.modoOscuro){
      
    }
  }

}