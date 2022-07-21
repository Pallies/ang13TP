import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationDevisComponent } from './creation/creation-devis.component';
import { DevisRoutingModule } from './devis-routing.module';

@NgModule({
  declarations: [CreationDevisComponent],
  imports: [
    CommonModule,
    DevisRoutingModule
  ],
})
export class DevisModule {}
