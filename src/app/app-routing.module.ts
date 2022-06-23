import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './componentes/error-page/error-page.component';
import { HomeComponent } from './componentes/pagina-principal/home/home.component';
import { UsuarioHomeComponent } from './componentes/usuario/usuario-home/usuario-home.component';



const routes: Routes = [
 {path: ':user', component:UsuarioHomeComponent},
 {path: '', component:HomeComponent},
 {path: '**', component:ErrorPageComponent},

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
