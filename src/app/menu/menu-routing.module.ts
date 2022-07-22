import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculesComponent } from './vehicules/vehicules.component';
import { ClientsComponent } from './clients/clients.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';

const routes: Routes = [
  {
    path: 'menu',
    children: [
      { path: 'vehicules', component: VehiculesComponent },
      { path: 'utilisateurs', component: UtilisateursComponent },
      { path: 'clients', component: ClientsComponent }
    ],
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
