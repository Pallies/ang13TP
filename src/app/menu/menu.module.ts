import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculesComponent } from './vehicules/vehicules.component';
import { ClientsComponent } from './clients/clients.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { MenuRoutingModule } from './menu-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ClientFormsComponent } from './clients/client-forms/client-forms.component';
import { ClientFormsService } from './clients/client-forms.service';

@NgModule({
  declarations: [VehiculesComponent, UtilisateursComponent, ClientsComponent, ClientFormsComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers:[ClientFormsService],
  exports:[VehiculesComponent, UtilisateursComponent, ClientsComponent]
})
export class MenuModule {}
