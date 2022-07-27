import { URL_BACK } from './../guards/url-back.routes';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { VenteVehicule } from '../models/vehicule-vendu';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root',
})
export class LoadventevehiculeResolver implements Resolve<VenteVehicule[]> {

  constructor(private api: ApiService<VenteVehicule>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<VenteVehicule[]> {
    let id = route.url[1].path;
    this.api.name = `${URL_BACK.VENTE_VEHICULE}/${id}?_expand=vehicule`;
    return this.api.getAll();
  }
}
