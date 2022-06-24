import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './componentes/error-page/error-page.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/pagina-principal/home/home.component';
import { UsuarioHomeComponent } from './componentes/usuario/usuario-home/usuario-home.component';



const routes: Routes = [
 
 {path: '', component:HomeComponent},
 {path: 'login', component:LoginComponent},
 {path: 'error', component:ErrorPageComponent},
 {path: ':user', component:UsuarioHomeComponent},
 {path: '**', component:ErrorPageComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
