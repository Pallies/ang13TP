import { BehaviorSubject, Observable, of } from 'rxjs';
import { Utilisateur } from './../models/utilisateur';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  utilisateur: BehaviorSubject<Utilisateur> = new BehaviorSubject(
    new Utilisateur()
  );
  utilisateurs!: Utilisateur[];

  constructor(private apiService: ApiService<Utilisateur>) {
    this.apiService.getAll().subscribe(data=>this.utilisateurs=data);
  }


  async connexion(utilisateur: Utilisateur): Promise<boolean> {
    return await this.utilisateurs
      .filter((data) => data.email === utilisateur.email)
      .flatMap((data) => {
        if (data.mdp === utilisateur.mdp) {
          this.utilisateur.next(data);
          return true;
        }
        return false;
      })[0];
  }
}
