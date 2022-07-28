import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { URL_BACK } from '../guards/url-back.routes';
import { Entretien } from '../models/entretien';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root',
})
export class LoadentretienResolver implements Resolve<Entretien[]> {

  constructor(private api: ApiService<Entretien>) {}

  resolve(): Observable<Entretien[]> {
    this.api.name = URL_BACK.ENTRETIEN;
    return this.api.getAll();
  }
}
