import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { URL_BACK } from '../guards/url-back.routes';
import { Client } from '../models/client';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root',
})
export class LoadclientResolver implements Resolve<Client[]> {

  constructor(private api: ApiService<Client>) {}

  resolve(): Observable<Client[]> {
    this.api.name = URL_BACK.CLIENT;
    return this.api.getAll();
  }
}
