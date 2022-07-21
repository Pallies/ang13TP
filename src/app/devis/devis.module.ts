import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationDevisComponent } from './creation/creation-devis.component';
import { DevisRoutingModule } from './devis-routing.module';
import { RecapDevisComponent } from './recap-devis/recap-devis.component';

@NgModule({
  declarations: [CreationDevisComponent, RecapDevisComponent],
  imports: [
    CommonModule,
    DevisRoutingModule
  ],
  exports:[CreationDevisComponent]
})
export class DevisModule {}
