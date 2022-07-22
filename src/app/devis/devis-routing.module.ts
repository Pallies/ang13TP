import { LoaduserResolver } from './../core/resolvers/loaduser.resolver';
import { RecapDevisComponent } from './recap-devis/recap-devis.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationDevisComponent } from './creation/creation-devis.component';
import { LoadvehiculeResolver } from '../core/resolvers/loadvehicule.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: { dataVehicules: LoadvehiculeResolver },
    children: [
      { path: 'creation', component: CreationDevisComponent },
      {
        path: 'recap',
        component: RecapDevisComponent,
        resolve: { dataUtilisateurs: LoaduserResolver },
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
