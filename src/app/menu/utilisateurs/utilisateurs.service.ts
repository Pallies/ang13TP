import { Injectable } from '@angular/core';
import { Utilisateur } from 'src/app/core/models/utilisateur';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class UtilisateursService {

  constructor(private apiService: ApiService<Utilisateur>) {
    this.apiService.name = 'utilisateurs'
  }

}
