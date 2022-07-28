import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { EntretienRoutingModule } from './entretien-routing.module';
import { CreationEntretienComponent } from './creation/creation.component';
import { ModalPrestaComponent } from './creation/modal-presta/modal-presta.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CreationEntretienComponent,
    ModalPrestaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EntretienRoutingModule,
    SharedModule
  ]
})
export class EntretienModule { }
