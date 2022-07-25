import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilGuard } from './core/guards/profil.guard';

import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path: 'devis',
    loadChildren: () =>
      import('./devis/devis.module').then((m) => m.DevisModule),
  },
  {
    path: 'menu',
    component: MenuComponent,
    canActivate: [ProfilGuard],
    loadChildren: () => import('./menu/menu.module').then((m) => m.MenuModule),
  },{
    path:'login', component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
