import { URL_BACK } from './../core/guards/url-back.routes';
import { DEVIS } from 'src/app/core/models/devis';
import { DatePipe } from '@angular/common';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { Devis } from './../core/models/devis';
import { ApiService } from 'src/app/core/services/api.service';
import { VehiculeVenteService } from './vehicule-vente.service';
import { Injectable } from '@angular/core';
import { VenteVehicule } from '../core/models/vehicule-vendu';
import { Client } from '../core/models/client';

@Injectable({
  providedIn: 'root',
})
export class DevisVenteService {
  devis: BehaviorSubject<Devis> = new BehaviorSubject(new Devis());

  constructor(
    private vehiculeVenduService: VehiculeVenteService,
    private apiService: ApiService<Devis | VenteVehicule>,
    public datePipe: DatePipe
  ) {
    this.devisValue[DEVIS.DATE] =
      this.datePipe.transform(new Date(), 'dd/MM/yyyy') || '';
  }
  get devisValue(): Devis {
    return this.devis.getValue();
  }
  async save(client: Client) {
    this._assignClient(client); //affectation du client au devis

    //affectation et enregistrement des véhicules vendus
    this.devisValue[DEVIS.QUANTITE] = this.vehiculeVenduService.quantiteTotal;
    this.devisValue[DEVIS.PRIX] = this.vehiculeVenduService.prixTotalHT;
    this.devisValue[DEVIS.STATUT] = false;

    await this._assignDevis().then((devis)=>this.devis.next(devis));
  }

  private _assignClient(client: Client) {
    this.devisValue[DEVIS.CLIENT_ID] = client.id;
  }

  private async _assignVehiculeVendu(devis: Devis): Promise<Devis> {
    const vehiculesVendus = this.vehiculeVenduService.value;
    this.apiService.name = URL_BACK.VENTE_VEHICULE;
    for (let vehiculeVendu of vehiculesVendus) {
      const vehiculeVente = new VenteVehicule(vehiculeVendu);
      vehiculeVente.deviId = devis.id;
      await lastValueFrom(this.apiService.add(vehiculeVente));
    }
    return devis;
  }

  private async _assignDevis(): Promise<Devis> {
    this.apiService.name = URL_BACK.DEVIS;
    return await lastValueFrom(this.apiService.add(this.devisValue)).then((data) => {
     return this._assignVehiculeVendu(data as Devis);
    });
  }
}
