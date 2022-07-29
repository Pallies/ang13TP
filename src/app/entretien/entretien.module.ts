import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { EntretienRoutingModule } from './entretien-routing.module';
import { CreationEntretienComponent } from './creation/creation.component';
import { ModalPrestaComponent } from './creation/modal-presta/modal-presta.component';
import { SharedModule } from '../shared/shared.module';
import { TvaPipe } from '../shared/pipes/tva.pipe';
import { ListeEntretienComponent } from './liste-entretien/liste-entretien.component';
import { ListeTacheComponent } from './liste-tache/liste-tache.component';
import { PrioriteDirective } from '../shared/directives/priorite.directive';

@NgModule({
  declarations: [
    CreationEntretienComponent,
    ModalPrestaComponent,
    ListeEntretienComponent,
    ListeTacheComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EntretienRoutingModule,
    SharedModule
  ],
  providers:[TvaPipe,DatePipe,PrioriteDirective]
})
export class EntretienModule { }
