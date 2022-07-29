import { ApiService } from 'src/app/core/services/api.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Produit } from '../models/produit';
import { URL_BACK } from '../guards/url-back.routes';

@Injectable({
  providedIn: 'root'
})
export class LoadproduitResolver implements Resolve<Produit[]> {
  constructor(private apiService:ApiService<Produit>){}
  resolve(): Observable<Produit[]> {
    this.apiService.name=`${URL_BACK.PRODUIT}`
    return this.apiService.getAll();
  }
}
