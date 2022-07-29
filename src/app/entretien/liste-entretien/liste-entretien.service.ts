import { Tache } from 'src/app/core/models/tache';
import { TacheEffectuer } from './../../core/models/tache';
import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { URL_BACK } from 'src/app/core/guards/url-back.routes';
import { URL_SNAPSHOT } from 'src/app/core/guards/url-front.routes';
import { Client } from 'src/app/core/models/client';
import { Entretien } from 'src/app/core/models/entretien';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class ListeEntretienService {
  entretiens$: BehaviorSubject<Entretien[]> = new BehaviorSubject<Entretien[]>(
    []
  );

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService<Entretien>,
    private datePipe: DatePipe
  ) {
    this.entretiens$.next(
      this.route.snapshot.data[URL_SNAPSHOT.DATA_ENTRETIEN].sort(
        (a: { terminer: boolean }, b: { terminer: boolean }) =>
          (a.terminer ? 1 : 0) - (b.terminer ? 1 : 0)
      )
    );

  }

  validerEntretien(entretien: Entretien): Observable<Entretien> {
    entretien.valider = true;
    delete entretien.client;
    entretien.dateCloture =
      this.datePipe.transform(new Date(), 'yyyy-MM-dd') || '';
    this.apiService.name = `${URL_BACK.ENTRETIEN}`;
    return this.apiService.update(entretien);
  }

  get value() {
    return this.entretiens$.getValue();
  }
}
