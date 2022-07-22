import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationDevisComponent } from './creation/creation-devis.component';
import { DevisRoutingModule } from './devis-routing.module';
import { ListeComponent } from './liste/liste.component';

@NgModule({
  declarations: [CreationDevisComponent, ListeComponent],
  imports: [
    CommonModule,
    DevisRoutingModule
  ],
  exports:[CreationDevisComponent]
})
export class DevisModule {}
