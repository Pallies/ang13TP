import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CreationDevisComponent } from './creation/creation-devis.component';
import { DevisRoutingModule } from './devis-routing.module';
import { RecapDevisComponent } from './recap-devis/recap-devis.component';
import { SharedModule } from '../shared/shared.module';
import { VehiculeVenteService } from './vehicule-vente.service';
import { DevisVenteService } from './devis-vente.service';
import { ListeDevisComponent } from './liste-devis/liste-devis.component';
import { ModalListeDevisComponent } from './modal-liste-devis/modal-liste-devis.component';
import { ModalDevisService } from './modal-liste-devis/modal-devis.service';

@NgModule({
  declarations: [
    CreationDevisComponent,
    RecapDevisComponent,
    ListeDevisComponent,
    ModalListeDevisComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DevisRoutingModule,
    SharedModule,
  ],
  providers: [
    VehiculeVenteService,
    DevisVenteService,
    ModalDevisService,
    DatePipe,
  ],
  exports: [CreationDevisComponent],
})
export class DevisModule {}
