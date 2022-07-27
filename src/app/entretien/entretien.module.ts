import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntretienRoutingModule } from './entretien-routing.module';
import { CreationEntretienComponent } from './creation/creation.component';
import { ModalPrestaComponent } from './creation/modal-presta/modal-presta.component';



@NgModule({
  declarations: [
    CreationEntretienComponent,
    ModalPrestaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EntretienRoutingModule
  ]
})
export class EntretienModule { }
