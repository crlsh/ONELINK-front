import { Component, OnInit } from '@angular/core';
import { DatosServiceService } from 'src/app/servicios/api/datos-service.service';
import { Persona } from 'src/app/servicios/interfaces/persona';
import { AuthService } from '@auth0/auth0-angular';
import { ThemeService } from 'src/app/servicios/theme/theme.service';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-user-estilos',
  templateUrl: './user-estilos.component.html',
  styleUrls: ['./user-estilos.component.scss']
})
export class UserEstilosComponent implements OnInit {

  persona!:Persona[];
  profileJson:any;  
  modoOscuro:boolean = false;
  pantallasPequenias!:boolean;
  

  constructor(private datosDb : DatosServiceService, public auth: AuthService, private themeService:ThemeService, private responsive: BreakpointObserver) { }

  ngOnInit(): void {
    this.auth.user$.subscribe((profile) => {
      this.profileJson = profile,      
      this.buscarUsuario(this.profileJson.email); //busca el usuario en la bd  
  });
  this.themeService.estadoModoOscuro().subscribe((modoOscuro) => (this.modoOscuro = modoOscuro));

  this.responsive.observe('(max-width: 768px)')                               //comprueba si la pantalla es pequeña y modifica el valor de la variable
  .subscribe(result => {

    this.pantallasPequenias = false; 

    if (result.matches) {
      this.pantallasPequenias = true;     
    } 
  })
  }

  buscarUsuario(user:string){
    this.datosDb.search("persona", user)
    .subscribe((datos) => {      
      this.persona = datos;                        //guarda el usuario en persona. si no hay nada, persona queda vacio
    });
  }

  public onSetTheme (e: string){    
     this.themeService.current = e;
     this.themeService.cambioEstilo();    
   }     
   
   modoOscuroSwitch(){
        
      if(this.modoOscuro === false){
        this.themeService.modoOscuroOn()
        console.log(this.modoOscuro)
      }else{
        this.themeService.modoOscuroOff();
        console.log(this.modoOscuro)
      }
   }

}
