import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationDevisComponent } from './creation/creation-devis.component';
import { ListeComponent } from './liste/liste.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'creation', component: CreationDevisComponent },
      { path: 'liste', component: ListeComponent }
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevisRoutingModule {}
