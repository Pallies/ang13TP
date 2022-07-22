import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DevisModule } from './devis/devis.module';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';


import { MenuModule } from './menu/menu.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DevisModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
