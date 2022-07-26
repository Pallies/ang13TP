import { URL_BACK } from './../core/guards/url-back.routes';
import { DEVIS } from 'src/app/core/models/devis';
import { DatePipe } from '@angular/common';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { Devis } from './../core/models/devis';
import { ApiService } from 'src/app/core/services/api.service';
import { VehiculeVenteService } from './vehicule-vente.service';
import { Injectable } from '@angular/core';
import { VehiculeVendu, VenteVehicule } from '../core/models/vehicule-vendu';
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
  save(client: Client) {
    this._assignClient(client); //affectation du client au devis

    //affectation et enregistrement des véhicules vendus
    const vehiculesVendus = this.vehiculeVenduService.value;
    this.devisValue[DEVIS.QUANTITE] = this.vehiculeVenduService.quantiteTotal;
    this.devisValue[DEVIS.PRIX] = this.vehiculeVenduService.prixTotalHT;
   this._assignVehiculeVendu(vehiculesVendus);

    // this._assignDevis();
  }

  private _assignClient(client: Client) {
    // this.devisValue[DEVIS.CLIENT]  = client;
    this.devisValue[DEVIS.CLIENT_ID] = client.id;
  }

  private async _assignVehiculeVendu(
    vehicules: VehiculeVendu[]
  ) {
    this.apiService.name = URL_BACK.VENTE_VEHICULE;
    for (let vehiculeVendu of vehicules) {
      const vehiculeVente= new VenteVehicule(vehiculeVendu);
      await lastValueFrom(this.apiService.add(vehiculeVente)).then(data => {
        this.devisValue[DEVIS.VEHICULES_VENDUS_ID].push((data as VenteVehicule).id as number);
      });
    }
    return await this._assignDevis();
  }

  private async _assignDevis() {
    this.apiService.name = URL_BACK.DEVIS;
    await this.apiService
      .add(this.devisValue)
      .subscribe((data) => this.devis.next(data as Devis));
  }
}
