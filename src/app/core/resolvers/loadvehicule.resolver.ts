import { Vehicule } from 'src/app/core/models/vehicule';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root',
})
export class LoadvehiculeResolver implements Resolve<Vehicule[]> {
  constructor(
    private apiService: ApiService<Vehicule>,
    ) {
    this.apiService.name = 'vehicules';
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Vehicule[]> {
    return this.apiService.getAll();
  }
}
