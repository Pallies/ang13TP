import { LoadproduitResolver } from './../core/resolvers/loadproduit.resolver';
import { LoadTacheEffectuerResolver } from './../core/resolvers/loadtache-effectuer.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { URL_SNAPSHOT } from '../core/guards/url-front.routes';
import { LoadclientResolver } from '../core/resolvers/loadclient.resolver';
import { LoadentretienResolver } from '../core/resolvers/loadentretien.resolver';
import { LoadtacheResolver } from '../core/resolvers/loadtache.resolver';
import { CreationEntretienComponent } from './creation/creation.component';
import { ListeEntretienComponent } from './liste-entretien/liste-entretien.component';
import { ListeTacheComponent } from './liste-tache/liste-tache.component';


/**
 * Ce routing contient les paths pour la navigation des entretiens
 */
const routes: Routes = [
  {
    path: 'entretien',
    children: [
      {
        path: 'creation',
        component: CreationEntretienComponent,
        resolve: {
          [URL_SNAPSHOT.DATA_CLIENT]: LoadclientResolver,
          [URL_SNAPSHOT.DATA_TACHE]: LoadtacheResolver,
        },
        runGuardsAndResolvers: 'always',
      },
      {
        path: 'liste-tache/:id',
        component: ListeTacheComponent,
        resolve: {
          [URL_SNAPSHOT.DATA_TACHE_EFFECTUER]: LoadTacheEffectuerResolver,
          [URL_SNAPSHOT.DATA_PRODUIT]: LoadproduitResolver,
        },
        runGuardsAndResolvers: 'always',
      },
      {
        path: 'liste-entretien',
        component: ListeEntretienComponent,
        resolve: {
          [URL_SNAPSHOT.DATA_ENTRETIEN]: LoadentretienResolver,
        },
        runGuardsAndResolvers: 'always',
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntretienRoutingModule {}
