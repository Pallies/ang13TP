import { DevisModule } from './devis/devis.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationDevisComponent } from './devis/creation/creation-devis.component';

import { LoaduserResolver } from './core/resolvers/loaduser.resolver';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

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
    path:"menu", component: MenuComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
