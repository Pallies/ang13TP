import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouleurSelectComponent } from './components/select/couleur/couleur-select.component';
import { QuantiteSelectComponent } from './components/select/quantite/quantite-select.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CouleurSelectComponent, QuantiteSelectComponent, NavbarComponent, MenuComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[CouleurSelectComponent, QuantiteSelectComponent, NavbarComponent,MenuComponent]
})
export class SharedModule { }
