import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProfilGuard implements CanActivate {
  constructor(private authService: AuthService,private router:Router) {}
  canActivate(): boolean {
    if(this.authService.utilisateur.getValue().profil == undefined)
      this.router.navigate(['/'])
    return true;
  }
}
