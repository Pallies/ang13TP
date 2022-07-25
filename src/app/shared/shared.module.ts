import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouleurSelectComponent } from './components/select/couleur/couleur-select.component';
import { QuantiteSelectComponent } from './components/select/quantite/quantite-select.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfilPipe } from './pipes/profil.pipe';

@NgModule({
  declarations: [CouleurSelectComponent, QuantiteSelectComponent, NavbarComponent, ProfilPipe],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[CouleurSelectComponent, QuantiteSelectComponent, NavbarComponent, ProfilPipe]
})
export class SharedModule { }
