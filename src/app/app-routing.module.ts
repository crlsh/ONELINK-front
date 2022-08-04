import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';


import { ErrorPageComponent } from './componentes/error-page/error-page.component';

import { HomeComponent } from './componentes/pagina-principal/home/home.component';
import { UserAdminComponent } from './componentes/usuario-admin/user-admin/user-admin.component';
import { UserDatosComponent } from './componentes/usuario-admin/user-datos/user-datos.component';
import { UserEstilosComponent } from './componentes/usuario-admin/user-estilos/user-estilos.component';
import { UserNuevoComponent } from './componentes/usuario-admin/user-nuevo/user-nuevo.component';
import { CaracteristicasComponent } from './componentes/pagina-principal/caracteristicas/caracteristicas.component';
import { NosotrosComponent } from './componentes/pagina-principal/nosotros/nosotros.component';
import { PreciosComponent } from './componentes/pagina-principal/precios/precios.component';
import { UsuarioHomeComponent } from './componentes/usuario/usuario-home/usuario-home.component';



const routes: Routes = [
 
 {path: '', component:HomeComponent}, 
 {path: 'error', component:ErrorPageComponent}, 
 {path: 'precios', component:PreciosComponent},
 {path: 'caracteristicas', component:CaracteristicasComponent},
 {path: 'nosotros', component:NosotrosComponent},
 {path: 'admin', component:UserAdminComponent, canActivate: [AuthGuard]},
 {path: 'nuevo', component:UserNuevoComponent, canActivate: [AuthGuard]},
 {path: 'perfil', component:UserDatosComponent, canActivate: [AuthGuard]},
 {path: 'estilos', component:UserEstilosComponent, canActivate: [AuthGuard]},
 {path: ':user', component:UsuarioHomeComponent},
 {path: '**', component:ErrorPageComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
