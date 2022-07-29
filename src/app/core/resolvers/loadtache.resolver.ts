import { ApiService } from './../services/api.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Tache } from '../models/tache';
import { URL_BACK } from '../guards/url-back.routes';

/**
 * Le resolver LoadtacheResolver va servir à charger tous les objets Tache
 * en faisant appel à ApiService
 */
@Injectable({
  providedIn: 'root'
})
export class LoadtacheResolver implements Resolve<Tache[]> {
  constructor(private apiService:ApiService<Tache>){
  }
  resolve(): Observable<Tache[]> {
    this.apiService.name=`${URL_BACK.TACHE}?_include=${URL_BACK.PRODUIT}`
    return this.apiService.getAll();
  }
}
