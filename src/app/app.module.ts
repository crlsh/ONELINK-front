import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ErrorPageComponent } from './componentes/error-page/error-page.component';
import { UsuarioBodyComponent } from './componentes/usuario/usuario-body/usuario-body.component';
import { UsuarioHeaderComponent } from './componentes/usuario/usuario-header/usuario-header.component';
import { UsuarioNavComponent } from './componentes/usuario/usuario-nav/usuario-nav.component';
import { UsuarioFooterComponent } from './componentes/usuario/usuario-footer/usuario-footer.component';
import { UsuarioHomeComponent } from './componentes/usuario/usuario-home/usuario-home.component';
import { HomeComponent } from './componentes/pagina-principal/home/home.component';
import { FooterComponent } from './componentes/pagina-principal/footer/footer.component';
import { BodyComponent } from './componentes/pagina-principal/body/body.component';
import { NavComponent } from './componentes/pagina-principal/nav/nav.component';
import { LoginComponent } from './componentes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,   
    ContactoComponent,
    ErrorPageComponent,
    UsuarioBodyComponent,
    UsuarioHeaderComponent,
    UsuarioNavComponent,
    UsuarioFooterComponent,
    UsuarioHomeComponent,
    HomeComponent,
    FooterComponent,
    BodyComponent,
    NavComponent,
    LoginComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
