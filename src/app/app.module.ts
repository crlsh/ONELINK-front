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

import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { BtnLoginComponent } from './componentes/botones/btn-login/btn-login.component';
import { BtnLogoutComponent } from './componentes/botones/btn-logout/btn-logout.component';
import { BtnSignupComponent } from './componentes/botones/btn-signup/btn-signup.component';
import { BtnEditComponent } from './componentes/botones/btn-edit/btn-edit.component';
import { BtnAuthenticationComponent } from './componentes/botones/btn-authentication/btn-authentication.component';
import { CargaComponent } from './componentes/carga/carga.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';

import { UserAdminComponent } from './componentes/usuario-admin/user-admin/user-admin.component';

import { ModalRedesComponent } from './componentes/modales/modal-redes/modal-redes.component';
import { UserRedesComponent } from './componentes/usuario-admin/user-redes/user-redes.component';
import { UserDatosComponent } from './componentes/usuario-admin/user-datos/user-datos.component';
import { UserNuevoComponent } from './componentes/usuario-admin/user-nuevo/user-nuevo.component';
import { UserNicknameComponent } from './componentes/usuario-admin/user-nickname/user-nickname.component';
import { ModalUserComponent } from './componentes/modales/modal-user/modal-user.component';
import { BtnEliminarCuentaComponent } from './componentes/botones/btn-eliminar-cuenta/btn-eliminar-cuenta.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { SideBarComponent } from './componentes/side-bar/side-bar.component';
import { UserNavComponent } from './componentes/usuario-admin/user-nav/user-nav.component';
import { UserSideBarComponent } from './componentes/usuario-admin/user-side-bar/user-side-bar.component';
import { UserEstilosComponent } from './componentes/usuario-admin/user-estilos/user-estilos.component';
import { PreciosComponent } from './componentes/pagina-principal/precios/precios.component';
import { NosotrosComponent } from './componentes/pagina-principal/nosotros/nosotros.component';
import { CaracteristicasComponent } from './componentes/pagina-principal/caracteristicas/caracteristicas.component';
import { UsuarioCuerpoPrincipalComponent } from './componentes/usuario/usuario-cuerpo-principal/usuario-cuerpo-principal.component';



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
    
    BtnLoginComponent,
    BtnLogoutComponent,
    BtnSignupComponent,
    BtnEditComponent,
    BtnAuthenticationComponent,
    CargaComponent,
    
    UserAdminComponent,          
    ModalRedesComponent, 
    UserRedesComponent, 
    UserDatosComponent, 
    UserNuevoComponent,
    UserNicknameComponent,
    ModalUserComponent,
    BtnEliminarCuentaComponent,
    SideBarComponent,
    UserNavComponent,
    UserSideBarComponent,
    UserEstilosComponent,
    PreciosComponent,
    NosotrosComponent,
    CaracteristicasComponent,
    UsuarioCuerpoPrincipalComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,  
    ShareButtonsModule,
    ShareIconsModule,  
    AuthModule.forRoot({
      ...env.auth,
      domain: 'dev-w7feczar.us.auth0.com',
      clientId: '1Sb8oQKWsajXO4IEFd6VxcJmL8QI46IG',
      //cacheLocation:'localstorage',
      httpInterceptor: {
        allowedList: [`${env.dev.serverUrl}/api/redes/save`, `${env.dev.serverUrl}/api/redes/update/*`,`${env.dev.serverUrl}/api/redes/delete/*`,`${env.dev.serverUrl}/api/persona/save`, `${env.dev.serverUrl}/api/persona/update/*`, `${env.dev.serverUrl}/api/persona/delete/*`],        
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalRedesComponent]
})
export class AppModule { }
