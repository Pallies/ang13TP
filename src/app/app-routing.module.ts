import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoaduserResolver } from './core/resolvers/loaduser.resolver';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { VehiculesComponent } from './menu/vehicules/vehicules.component';
import { ClientsComponent } from './menu/clients/clients.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    resolve: { dataUtilisateur: LoaduserResolver },
  },
  {
    path: 'devis',
    loadChildren: () =>
      import('./devis/devis.module').then((m) => m.DevisModule),
  },
  {
    path:'menu', component: MenuComponent,
    loadChildren: () =>
      import('./menu/menu.module').then((m) => m.MenuModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
