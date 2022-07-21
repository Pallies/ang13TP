import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})

export class LoaduserResolver implements Resolve<Utilisateur[]> {

  constructor(private apiservice:ApiService<Utilisateur>) {
    this.apiservice.name = "utilisateurs"
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Utilisateur[]> {
    return this.apiservice.getAll();
  }
}
