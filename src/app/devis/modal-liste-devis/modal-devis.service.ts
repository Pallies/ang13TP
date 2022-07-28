import { tap, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Devis } from 'src/app/core/models/devis';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'platform',
})
export class ModalDevisService {
  devis: BehaviorSubject<Devis[]> = new BehaviorSubject<Devis[]>([]);
  devisEnSuppression: BehaviorSubject<Devis>= new BehaviorSubject<Devis>(new Devis());
  constructor(private apiService: ApiService<Devis>) {}

  delete() {
    this.apiService.name = `devis/${this.devisDeleted.id}?embed=venteVehicules`;
    return this.apiService
      .delete(new Devis())
      .pipe(tap(() => this.updateValue()));
  }

  open(devis: Devis) {
    this.devisEnSuppression.next(devis);
  }

  updateValue() {
   this.devis.next(this.devis.getValue().filter(devis=>devis.id!=this.devisDeleted.id));
  }
  get devisDeleted() {
    return this.devisEnSuppression.getValue();
  }
}
