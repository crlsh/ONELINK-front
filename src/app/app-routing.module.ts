import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componetes/home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PhomeComponent } from './PaginaPrincipal/phome/phome.component';


const routes: Routes = [
 {path: 'usuario', component:HomeComponent},
 {path: '', component:PhomeComponent},
 {path: '**', component:ErrorPageComponent},

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
