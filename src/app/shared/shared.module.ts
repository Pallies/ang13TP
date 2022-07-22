import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouleurComponent } from './components/couleur/couleur.component';



@NgModule({
  declarations: [CouleurComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[CouleurComponent]
})
export class SharedModule { }
