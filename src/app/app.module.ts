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
    ModalRedesComponent, UserRedesComponent, UserDatosComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,    
    AuthModule.forRoot({
      ...env.auth,
      domain: 'dev-w7feczar.us.auth0.com',
      clientId: '1Sb8oQKWsajXO4IEFd6VxcJmL8QI46IG',
      //cacheLocation:'localstorage',
      httpInterceptor: {
        allowedList: [`${env.dev.serverUrl}/api/redes/save`, `${env.dev.serverUrl}/api/redes/update/*`,`${env.dev.serverUrl}/api/redes/delete/*`],        
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
