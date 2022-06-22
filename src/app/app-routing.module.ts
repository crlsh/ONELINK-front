import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componetes/home/home.component';
import { PhomeComponent } from './PaginaPrincipal/phome/phome.component';

const routes: Routes = [
 //{path: '', component:HomeComponent}
 {path: '', component:PhomeComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
