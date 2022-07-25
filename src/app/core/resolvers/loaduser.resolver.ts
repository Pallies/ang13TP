import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root',
})
export class LoaduserResolver implements Resolve<Client[]> {

  constructor(private api: ApiService<Client>) {}

  resolve(): Observable<Client[]> {
    this.api.name = 'utilisateurs';
    return this.api.getAll();
  }
}
