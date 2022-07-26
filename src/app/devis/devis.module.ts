import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CreationDevisComponent } from './creation/creation-devis.component';
import { DevisRoutingModule } from './devis-routing.module';
import { RecapDevisComponent } from './recap-devis/recap-devis.component';
import { SharedModule } from '../shared/shared.module';
<<<<<<< HEAD
import { DevisVehiculeService } from './devis-vehicule.service';
import { ListeDevisComponent } from './liste-devis/liste-devis.component';
=======
import { VehiculeVenteService } from './vehicule-vente.service';
import { DevisVenteService } from './devis-vente.service';
>>>>>>> b657a067cdc804c164f9e6ec993a3c9e7ffc78d1

@NgModule({
  declarations: [CreationDevisComponent, RecapDevisComponent, ListeDevisComponent],
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
