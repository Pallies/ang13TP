import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaddevisResolver } from '../core/resolvers/loaddevis.resolver';
import { URL_SNAPSHOT } from '../core/guards/url-front.routes';
import { GenerateComponent } from './generate/generate.component';
import { ListeComponent } from './liste/liste.component';
import { LoadvehiculeResolver } from '../core/resolvers/loadvehicule.resolver';
import { LoadventevehiculeResolver } from '../core/resolvers/loadventevehicule.resolver';

/**
 * Ce routing contient les paths pour la navigation des factures
 */
const routes: Routes = [
  {
    path: 'factures',
    children: [
      {
        path: 'liste',
        component: ListeComponent,
        resolve: { [URL_SNAPSHOT.DATA_DEVIS]: LoaddevisResolver },
      },
      {
        path: ':id',
        component: GenerateComponent,
        resolve: {
          [URL_SNAPSHOT.DATA_VEHICULE]: LoadvehiculeResolver,
          [URL_SNAPSHOT.DATA_VENTE_VEHICULE]: LoadventevehiculeResolver
        },
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FactureRoutingModule {}
