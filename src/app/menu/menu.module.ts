import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculesComponent } from './vehicules/vehicules.component';
import { ClientsComponent } from './clients/clients.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { MenuRoutingModule } from './menu-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [VehiculesComponent, UtilisateursComponent, ClientsComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    SharedModule
  ],
  exports:[VehiculesComponent, UtilisateursComponent, ClientsComponent]
})
export class MenuModule {}
