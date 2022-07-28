import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { GenerateComponent } from './generate/generate.component';
import { ListeComponent } from './liste/liste.component';
import { FactureRoutingModule } from './facture-routing.module';


@NgModule({
  declarations: [
    GenerateComponent,
    ListeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FactureRoutingModule,
    SharedModule,
  ],
  providers: [
    DatePipe,
  ],
  exports: [GenerateComponent],
})
export class FactureModule {}
