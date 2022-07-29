import { ApiService } from './../services/api.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Tache } from '../models/tache';
import { URL_BACK } from '../guards/url-back.routes';

@Injectable({
  providedIn: 'root'
})
export class LoadtacheResolver implements Resolve<Tache[]> {
  constructor(private apiService:ApiService<Tache>){
  }
  resolve(): Observable<Tache[]> {
    this.apiService.name=`${URL_BACK.TACHE}?_include=${URL_BACK.PRODUIT}`
    return this.apiService.getAll();
  }
}
