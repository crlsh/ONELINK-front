import { Component, OnInit, HostBinding } from '@angular/core';
import { OverlayContainer} from '@angular/cdk/overlay';
import { ActivatedRoute, Router} from '@angular/router';
import { DatosServiceService } from 'src/app/servicios/api/datos-service.service';
import { Persona } from 'src/app/servicios/interfaces/persona';
import { ThemeService } from 'src/app/servicios/theme/theme.service';

@Component({
  selector: 'app-usuario-home',
  templateUrl: './usuario-home.component.html',
  styleUrls: ['./usuario-home.component.scss']
})
export class UsuarioHomeComponent implements OnInit {

  persona!: Persona[];
  user!: string|null;
  loading: boolean;
  @HostBinding('class') componentCssClass: any; 
  cambioEstilo:boolean = false;
  estilo!: string;
  modoOscuro!:boolean;
  background!:string; 
  
  

  constructor(private activatedRouter: ActivatedRoute, private datosDb : DatosServiceService, private router: Router, public overlayContainer: OverlayContainer, private themeService: ThemeService) { 
    this.user = this.activatedRouter.snapshot.paramMap.get('user');
    //console.log(this.user);
    this.loading=true;
  }

  ngOnInit(): void {
   //this.cargarDatos()
   this.buscarUsuario()
   //this.onSetTheme();
  /*  this.themeService.estadoModoOscuro().subscribe((modoOscuro) => (this.modoOscuro = modoOscuro));
   if (localStorage.getItem('modoOscuro')) {
      this.themeService.modoOscuroOn();
   }  */
   

  }

 /*  cargarDatos(){
    this.datosDb.getAllPersonas("persona")
    .subscribe((datos) => {      
      console.log(datos);
    });
  } */

  buscarUsuario(){
    this.datosDb.searchBynickname("persona", this.user)
    .subscribe((datos) => {      
      this.persona = datos;
      console.log(this.persona);      
      this.comprobarDatos();
    });
 
  }

  comprobarDatos(){
    if(Object.entries(this.persona).length === 0){
      console.log("vacio");
      this.router.navigate(['error']);
    }else{
      console.log("tiene datos");
      this.loading = false
    }
    this.background = this.persona[0].background;
   console.log(this.background);
  }
/* 
 
  public onSetTheme (e: string){
    console.log(this.estilo);
    this.overlayContainer.getContainerElement().classList.add(e);
    this.componentCssClass = e;
    this.themeService.cambioEstiloFalso();
    console.log(this.cambioEstilo);
  } */

}
