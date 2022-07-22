import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationDevisComponent } from './creation/creation-devis.component';
import { DevisRoutingModule } from './devis-routing.module';
import { RecapDevisComponent } from './recap-devis/recap-devis.component';
import { SharedModule } from '../shared/shared.module';
import { DevisVehiculeService } from './devis-vehicule.service';

@NgModule({
  declarations: [CreationDevisComponent, RecapDevisComponent],
  imports: [
    CommonModule,
    DevisRoutingModule,
    SharedModule
  ],
  providers:[DevisVehiculeService],
  exports:[CreationDevisComponent]
})
export class DevisModule {}
