import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componetes/home/home.component';
import { BodyComponent } from './componetes/body/body.component';
import { HeaderComponent } from './componetes/header/header.component';
import { FooterComponent } from './componetes/footer/footer.component';
import { NavComponent } from './componetes/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
