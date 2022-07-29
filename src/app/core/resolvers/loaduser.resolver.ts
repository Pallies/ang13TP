import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { URL_BACK } from '../guards/url-back.routes';
import { Utilisateur } from '../models/utilisateur';

import { ApiService } from '../services/api.service';

/**
 * Le resolver LoaduserResolver va servir à charger tous les objets Utilisateur
 * en faisant appel à ApiService
 */
@Injectable({
  providedIn: 'root',
})

export class LoaduserResolver implements Resolve<Utilisateur[]> {

  constructor(private apiservice: ApiService<Utilisateur>) {}

  resolve(): Observable<Utilisateur[]> {
    this.apiservice.name = URL_BACK.UTILISATEUR;
    return this.apiservice.getAll();

  }
}
