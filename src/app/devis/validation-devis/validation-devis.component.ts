import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { URL_SNAPSHOT } from 'src/app/core/guards/url-front.routes';
import { Vehicule } from 'src/app/core/models/vehicule';
import { VenteVehicule } from 'src/app/core/models/vehicule-vendu';

@Component({
  selector: 'car-validation-devis',
  templateUrl: './validation-devis.component.html',
  styleUrls: ['./validation-devis.component.css']
})
export class ValidationDevisComponent implements OnInit {

  vehicules!: Vehicule[];
  venteVehicules!: VenteVehicule[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.vehicules = this.route.snapshot.data[URL_SNAPSHOT.DATA_VEHICULE];
    this.venteVehicules = this.route.snapshot.data[URL_SNAPSHOT.DATA_VENTE_VEHICULE];
  }

}
