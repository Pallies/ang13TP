import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { CouleurSelectComponent } from './components/select/couleur/couleur-select.component';
import { QuantiteSelectComponent } from './components/select/quantite/quantite-select.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfilPipe } from './pipes/profil.pipe';
import { EntretienPipe } from './pipes/entretien.pipe';
import { TvaPipe } from './pipes/tva.pipe';
import { PrioriteDirective } from './directives/priorite.directive';

@NgModule({
  declarations: [
    CouleurSelectComponent,
    QuantiteSelectComponent,
    NavbarComponent,
    ProfilPipe,
    EntretienPipe,
    TvaPipe,
    PrioriteDirective,
  ],
  imports: [CommonModule, FormsModule],
  providers: [DecimalPipe],
  exports: [
    CouleurSelectComponent,
    QuantiteSelectComponent,
    NavbarComponent,
    ProfilPipe,
    EntretienPipe,
    TvaPipe,
    PrioriteDirective
  ],
})
export class SharedModule {}
