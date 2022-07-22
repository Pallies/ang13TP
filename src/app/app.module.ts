import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DevisModule } from './devis/devis.module';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuVehiculesComponent } from './menu/menu-vehicules/menu-vehicules.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuUtilisateursComponent } from './menu/menu-utilisateurs/menu-utilisateurs.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    MenuVehiculesComponent,
    NavbarComponent,
    MenuUtilisateursComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DevisModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
