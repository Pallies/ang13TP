import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoaduserResolver } from './core/resolvers/loaduser.resolver';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path:"", component: LoginComponent,
    resolve: {dataUtilisateur : LoaduserResolver},
  },
  {
    path:"menu", component: MenuComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
