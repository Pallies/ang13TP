import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoaduserResolver } from './core/resolver/loaduser.resolver';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:"", component: LoginComponent,
    resolve: {dataUtilisateur : LoaduserResolver},
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
