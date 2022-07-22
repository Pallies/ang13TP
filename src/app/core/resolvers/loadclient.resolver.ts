import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root',
})
export class LoadclientResolver implements Resolve<Client[]> {
  constructor(private api: ApiService<Client>) {
    this.api.name = 'clients';
  }
  resolve(): Observable<Client[]> {
    return this.api.getAll();
  }
}
