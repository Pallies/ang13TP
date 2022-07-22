import { Vehicule } from 'src/app/core/models/vehicule';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root',
})
export class LoadvehiculeResolver implements Resolve<Vehicule[]> {
  constructor(private apiService: ApiService<Vehicule>) {}
  resolve(): Observable<Vehicule[]> {
    this.apiService.name = 'vehicules';
    return this.apiService.getAll();
  }
}
