import { RecapDevisComponent } from './recap-devis/recap-devis.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationDevisComponent } from './creation/creation-devis.component';
import { LoadvehiculeResolver } from '../core/resolvers/loadvehicule.resolver';
import { LoadclientResolver } from '../core/resolvers/loadclient.resolver';
// import { LoadclientResolver } from '../core/resolvers/loadclient.resolver';

const routes: Routes = [
  {
    path: 'devis',
    children: [
      {
        path: 'creation',
        component: CreationDevisComponent,
        resolve: { dataVehicules: LoadvehiculeResolver },
        runGuardsAndResolvers: 'always'
      },
      {
        path: 'recap',
        component: RecapDevisComponent,
        resolve: { dataClients: LoadclientResolver },
        runGuardsAndResolvers: 'always'
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevisRoutingModule {}
