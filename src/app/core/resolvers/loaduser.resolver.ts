import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root',
})
export class LoaduserResolver implements Resolve<Utilisateur[]> {
  
  constructor(private apiservice: ApiService<Utilisateur>) {}

  resolve(): Observable<Utilisateur[]> {
    this.apiservice.name = 'utilisateurs';
    return this.apiservice.getAll();
  }
}
