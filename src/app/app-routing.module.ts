import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';


import { ErrorPageComponent } from './componentes/error-page/error-page.component';

import { HomeComponent } from './componentes/pagina-principal/home/home.component';
import { UserAdminComponent } from './componentes/usuario-admin/user-admin/user-admin.component';
import { UserNuevoComponent } from './componentes/usuario-admin/user-nuevo/user-nuevo.component';
import { UsuarioHomeComponent } from './componentes/usuario/usuario-home/usuario-home.component';



const routes: Routes = [
 
 {path: '', component:HomeComponent}, 
 {path: 'error', component:ErrorPageComponent}, 
 {path: 'admin', component:UserAdminComponent, canActivate: [AuthGuard]},
 {path: 'nuevo', component:UserNuevoComponent, canActivate: [AuthGuard]},
 {path: ':user', component:UsuarioHomeComponent},
 {path: '**', component:ErrorPageComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
