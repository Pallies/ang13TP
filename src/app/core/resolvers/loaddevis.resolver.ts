import { URL_BACK } from './../guards/url-back.routes';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Devis } from '../models/devis';
import { ApiService } from '../services/api.service';

/**
 * Le resolver LoaddevisResolver va servir à charger tous les objets Devis
 * en faisant appel à ApiService
 */
@Injectable({
  providedIn: 'root',
})
export class LoaddevisResolver implements Resolve<Devis[]> {

  constructor(private api: ApiService<Devis>) {}

  resolve(): Observable<Devis[]> {
    this.api.name = `${URL_BACK.DEVIS}?_embed=venteVehicules&_expand=client`;
    return this.api.getAll();
  }
}
