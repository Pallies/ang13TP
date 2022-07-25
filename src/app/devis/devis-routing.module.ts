import { RecapDevisComponent } from './recap-devis/recap-devis.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationDevisComponent } from './creation/creation-devis.component';
import { LoadvehiculeResolver } from '../core/resolvers/loadvehicule.resolver';
import { LoadclientResolver } from '../core/resolvers/loadclient.resolver';
import { ListeDevisComponent } from './liste-devis/liste-devis.component';

const routes: Routes = [
  {
    path: 'devis',
    resolve: { dataVehicules: LoadvehiculeResolver },
    children: [
      { path: 'creation', component: CreationDevisComponent },
      {
        path: 'recap',
        component: RecapDevisComponent,
        resolve: { dataClients: LoadclientResolver },
      },
      { path: 'liste', component: ListeDevisComponent }
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevisRoutingModule {}
