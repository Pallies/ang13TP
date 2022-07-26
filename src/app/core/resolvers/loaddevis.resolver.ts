import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Devis } from '../models/devis';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root',
})
export class LoaddevisResolver implements Resolve<Devis[]> {

  constructor(private api: ApiService<Devis>) {}

  resolve(): Observable<Devis[]> {
    this.api.name = 'devis?_embed=venteVehicules&_expand=client';
    return this.api.getAll();
  }
}
