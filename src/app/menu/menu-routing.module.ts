import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculesComponent } from './vehicules/vehicules.component';
import { ClientsComponent } from './clients/clients.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { LoaduserResolver } from '../core/resolvers/loaduser.resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'vehicules', component: VehiculesComponent },
      {
        path: 'utilisateurs',
        component: UtilisateursComponent,
        resolve: { dataUtilisateurs: LoaduserResolver },
      },
      { path: 'clients', component: ClientsComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
