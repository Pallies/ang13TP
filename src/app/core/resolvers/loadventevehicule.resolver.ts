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
    // console.log();
    let id = route.params['id']?route.params['id']:route.url[1].path;

    this.api.name = `devis/${id}?_embed=venteVehicules&_expand=client`;

    return this.api.getAll();
  }
}
