import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { singularUrl, URL_BACK } from '../guards/url-back.routes';

import { TacheEffectuer } from '../models/tache';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root',
})
export class LoadTacheEffectuerResolver implements Resolve<TacheEffectuer[]> {

  constructor(private api: ApiService<TacheEffectuer>) {}

  resolve(): Observable<TacheEffectuer[]> {
    this.api.name = `${URL_BACK.TACHE_A_EFFECTUER}?_expand=${singularUrl(URL_BACK.ENTRETIEN)}`;
    return this.api.getAll();
  }
}


