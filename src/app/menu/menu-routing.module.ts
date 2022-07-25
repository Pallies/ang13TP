import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculesComponent } from './vehicules/vehicules.component';
import { ClientsComponent } from './clients/clients.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { LoaduserResolver } from '../core/resolvers/loaduser.resolver';
import { LoadclientResolver } from '../core/resolvers/loadclient.resolver';

const routes: Routes = [
  {
    path: 'menu',
    children: [
      { path: 'vehicules', component: VehiculesComponent },
      {
        path: 'utilisateurs',
        component: UtilisateursComponent,
        resolve: { dataUtilisateurs: LoaduserResolver },
      },
      { path: 'clients', component: ClientsComponent },
      { path: 'utilisateurs', component: UtilisateursComponent },
      {
        path: 'clients',
        component: ClientsComponent,
        resolve: { dataClients: LoadclientResolver },
        runGuardsAndResolvers: 'always',
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
