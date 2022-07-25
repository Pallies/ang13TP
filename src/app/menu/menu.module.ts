import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculesComponent } from './vehicules/vehicules.component';
import { MenuRoutingModule } from './menu-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ClientsComponent } from './clients/clients.component';
import { ClientFormsComponent } from './clients/client-forms/client-forms.component';
import { ClientFormsService } from './clients/client-forms.service';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { UtilisateurFormsComponent } from './utilisateurs/utilisateur-forms/utilisateur-forms.component';
import { UtilisateurFormsService } from './utilisateurs/utilisateur-forms.service';

@NgModule({
  declarations: [
    VehiculesComponent,
    UtilisateursComponent,
    UtilisateurFormsComponent,
    ClientsComponent,
    ClientFormsComponent,
  ],
  imports: [CommonModule, MenuRoutingModule, SharedModule, ReactiveFormsModule],
  providers: [ClientFormsService, UtilisateurFormsService],
  exports: [VehiculesComponent, UtilisateursComponent, ClientsComponent],
})
export class MenuModule {}
