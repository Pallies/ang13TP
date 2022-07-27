import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forEach } from 'cypress/types/lodash';
import { URL_SNAPSHOT } from 'src/app/core/guards/url-front.routes';
import { Devis } from 'src/app/core/models/devis';
import { Vehicule } from 'src/app/core/models/vehicule';
import { VehiculeVendu, VenteVehicule } from 'src/app/core/models/vehicule-vendu';

@Component({
  selector: 'car-validation-devis',
  templateUrl: './validation-devis.component.html',
  styleUrls: ['./validation-devis.component.css']
})
export class ValidationDevisComponent implements OnInit {

  vehicules!: Vehicule[];
  devis!: Devis;
  venteVehicules!: VehiculeVendu[];
  prixTTC!: number;
  qteTotale!: number;
  prixTotal!: number;

  constructor(private route: ActivatedRoute) {
    this.vehicules = this.route.snapshot.data[URL_SNAPSHOT.DATA_VEHICULE];
    this.devis = this.route.snapshot.data[URL_SNAPSHOT.DATA_VENTE_VEHICULE];
  }

  ngOnInit(): void {
    var prix = 0;
    var qte = 0;

    this.venteVehicules = Object.values(this.devis.venteVehicules ).map((venteVehicule: VenteVehicule)=>{
      return this.vehicules.filter(v=>v.id==venteVehicule.id).map(v=>{
        const vehiculeVendu= new VehiculeVendu(v)
        return vehiculeVendu.setCaracteristique(venteVehicule);
      })[0];
    });

    this.venteVehicules.forEach(function (value) {
      prix += value.vehicule.prixHT;
      qte += value.quantiteVendu;
    });

    this.prixTTC = prix;
    this.qteTotale = qte;
    this.prixTotal = this.prixTTC + this.prixTTC * 0.2;
  }

}
