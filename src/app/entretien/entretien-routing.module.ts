import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { URL_SNAPSHOT } from '../core/guards/url-front.routes';
import { LoadclientResolver } from '../core/resolvers/loadclient.resolver';
import { LoadtacheResolver } from '../core/resolvers/loadtache.resolver';
import { CreationEntretienComponent } from './creation/creation.component';


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
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntretienRoutingModule {}
