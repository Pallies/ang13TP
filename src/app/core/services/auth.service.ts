import { gestionProfil, ROUTES_MENU } from '../guards/url-front.routes';
import { BehaviorSubject} from 'rxjs';
import { Utilisateur } from './../models/utilisateur';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Profil } from '../models/profil';
import { URL_BACK } from '../guards/url-back.routes';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  utilisateur: BehaviorSubject<Utilisateur> = new BehaviorSubject(
    new Utilisateur()
  );
  utilisateurs!: Utilisateur[];

  constructor(private apiService: ApiService<Utilisateur>) {
    this.apiService.name=URL_BACK.UTILISATEUR;
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
  accesRoutes(routes:ROUTES_MENU):boolean{
    // récupération du profil
    const profil= Object.entries(Profil).filter(profil=>
      profil[0]== this.utilisateur.getValue().profil
    ).flatMap(data=>data[1])[0]

    return gestionProfil[profil]?.includes(routes)
  }
}
