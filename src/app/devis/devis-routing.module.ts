import { RecapDevisComponent } from './recap-devis/recap-devis.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationDevisComponent } from './creation/creation-devis.component';
import { LoadvehiculeResolver } from '../core/resolvers/loadvehicule.resolver';
import { LoadclientResolver } from '../core/resolvers/loadclient.resolver';
import { URL_SNAPSHOT } from '../core/guards/url-front.routes';

const routes: Routes = [
  {
    path: 'devis',
    resolve: { [URL_SNAPSHOT.DATA_VEHICULE]: LoadvehiculeResolver },
    children: [
      {
        path: 'creation',
        component: CreationDevisComponent,
      },
      {
        path: 'recap',
        component: RecapDevisComponent,
        resolve: { [URL_SNAPSHOT.DATA_CLIENT]: LoadclientResolver },
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
