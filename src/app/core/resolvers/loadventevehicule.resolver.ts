import { singularUrl, URL_BACK } from './../guards/url-back.routes';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { VenteVehicule } from '../models/vehicule-vendu';
import { ApiService } from '../services/api.service';

/**
 * Le resolver LoadventevehiculeResolver va servir à charger tous les objets VenteVehicule
 * en faisant appel à ApiService
 */
@Injectable({
  providedIn: 'root',
})
export class LoadventevehiculeResolver implements Resolve<VenteVehicule[]> {

  constructor(private api: ApiService<VenteVehicule>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<VenteVehicule[]> {
    let id = route.params['id']?route.params['id']:route.url[1].path;

    this.api.name = `${URL_BACK.DEVIS}/${id}?_embed=${URL_BACK.VENTE_VEHICULE}&_expand=${singularUrl(URL_BACK.CLIENT)}`;

    return this.api.getAll();
  }
}
