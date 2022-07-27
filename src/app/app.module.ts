import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DevisModule } from './devis/devis.module';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { SharedModule } from './shared/shared.module';
import { MenuModule } from './menu/menu.module';
import { ValidationDevisComponent } from './devis/validation-devis/validation-devis.component';
import { EntretienModule } from './entretien/entretien.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    ValidationDevisComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MenuModule,
    DevisModule,
    EntretienModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
