import { Vehicule } from 'src/app/core/models/vehicule';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recap-devis',
  templateUrl: './recap-devis.component.html',
  styleUrls: ['./recap-devis.component.css']
})
export class RecapDevisComponent implements OnInit {

  venteVehicules:Vehicule[]=[  {
    id: 2,
    photo: '',
    marque: 'Citroën',
    modele: 'picasso',
    annee: '2018',
    couleur: 'rouge',
    quantite: 1,
    prixHT: 3500.99,
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
