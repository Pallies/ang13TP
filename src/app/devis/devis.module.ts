import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CreationDevisComponent } from './creation/creation-devis.component';
import { DevisRoutingModule } from './devis-routing.module';
import { RecapDevisComponent } from './recap-devis/recap-devis.component';
import { SharedModule } from '../shared/shared.module';
import { VehiculeVenteService } from './vehicule-vente.service';
import { DevisVenteService } from './devis-vente.service';

@NgModule({
  declarations: [CreationDevisComponent, RecapDevisComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DevisRoutingModule,
    SharedModule
  ],
  providers:[VehiculeVenteService,DevisVenteService,DatePipe],
  exports:[CreationDevisComponent]
})
export class DevisModule {}
