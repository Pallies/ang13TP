import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilGuard } from './core/guards/profil.guard';
import { URL_SNAPSHOT } from './core/guards/url-front.routes';
import { LoaddevisResolver } from './core/resolvers/loaddevis.resolver';
import { LoadvehiculeResolver } from './core/resolvers/loadvehicule.resolver';
import { LoadventevehiculeResolver } from './core/resolvers/loadventevehicule.resolver';
import { GenerateComponent } from './facture/generate/generate.component';
import { ListeComponent } from './facture/liste/liste.component';
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
  },
  {
    path: 'factures',
    loadChildren: () =>
      import('./facture/facture.module').then((m) => m.FactureModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
