import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouleurSelectComponent } from './components/select/couleur/couleur-select.component';
import { QuantiteSelectComponent } from './components/select/quantite/quantite-select.component';



@NgModule({
  declarations: [CouleurSelectComponent, QuantiteSelectComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[CouleurSelectComponent,QuantiteSelectComponent]
})
export class SharedModule { }
