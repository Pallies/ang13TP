import { Tache } from 'src/app/core/models/tache';
import { ENTRETIEN } from './../../core/models/entretien';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { Entretien } from 'src/app/core/models/entretien';
import { TacheEffectuer } from './../../core/models/tache';
import { ApiService } from 'src/app/core/services/api.service';
import { Injectable } from '@angular/core';
import { Client } from 'src/app/core/models/client';
import { URL_BACK } from 'src/app/core/guards/url-back.routes';
import { MenuPrestaService } from './menu-presta.service';
/**
 * SAUVEGARDE EN BASE DE DONNEE
 * sauvegarde la class Entretien
 * sauvegarde la class TacheEffectuer
 */
@Injectable({
  providedIn: 'root',
})
export class SaveEntretienService {
  taches: Tache[] = [];
  constructor(
    private apiService: ApiService<TacheEffectuer | Entretien>,
    private menuPresta: MenuPrestaService
  ) {}

  async sauvegardeEntretien(client: Client, date: string) {
    this._assignClientAndDate(client, date);
    this._assignTaches(this.menuPresta.EntretienValue);

    await this._assignEntretien({...this.menuPresta.EntretienValue}).then((entretien) =>{
      this.menuPresta.entretien.next(new Entretien())
    });
  }
  private _assignClientAndDate(client: Client, date: string) {
    this.menuPresta.EntretienValue[ENTRETIEN.CLIENT_ID] = client.id;
    this.menuPresta.EntretienValue[ENTRETIEN.DATE] = date;
  }
  private _assignTaches(entretien: Entretien) {
    this.taches = [];
    this.taches = entretien.taches;
  }
  private async _assignEntretien(entretien: Entretien): Promise<Entretien> {
    entretien.taches=[];
    this.apiService.name = URL_BACK.ENTRETIEN;
    return await lastValueFrom(this.apiService.add(entretien)).then(
      (data) => {
        return this._assignTacheEffectuer(data as Entretien);
      }
    );
  }
  private async _assignTacheEffectuer(
    entretien: Entretien
  ): Promise<Entretien> {
    this.apiService.name = URL_BACK.TACHE_A_EFFECTUER;
    for (let tache of this.taches) {
      const tacheEffectuer = new TacheEffectuer(tache, entretien.id);
      await lastValueFrom(this.apiService.add(tacheEffectuer));
    }
    return entretien;
  }
}
