import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculesComponent } from './vehicules/vehicules.component';
import { ClientsComponent } from './clients/clients.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { LoaduserResolver } from '../core/resolvers/loaduser.resolver';
import { LoadclientResolver } from '../core/resolvers/loadclient.resolver';
import { ProfilGuard } from '../core/guards/profil.guard';
import { URL_SNAPSHOT } from '../core/guards/url-front.routes';
import { EntretienComponent } from './entretien/entretien.component';

/**
 * Ce routing contient les paths pour la navigation des menus
 */
const routes: Routes = [
  {
    path: 'menu',
    canActivate: [ProfilGuard],
    children: [
      { path: 'vehicules', component: VehiculesComponent },
      {
        path: 'utilisateurs',
        component: UtilisateursComponent,
        resolve: { [URL_SNAPSHOT.DATA_UTILISATEUR]: LoaduserResolver },
        runGuardsAndResolvers: 'always',
      },
      {
        path: 'clients',
        component: ClientsComponent,
        resolve: { [URL_SNAPSHOT.DATA_CLIENT]: LoadclientResolver },
        runGuardsAndResolvers: 'always',
      },
      {
        path: 'entretien',
        component: EntretienComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
