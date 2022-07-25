import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Devis } from 'src/app/core/models/devis';
import { DevisVehiculeService } from '../devis-vehicule.service';

@Component({
  selector: 'car-liste-devis',
  templateUrl: './liste-devis.component.html',
  styleUrls: ['./liste-devis.component.css']
})
export class ListeDevisComponent implements OnInit {

  allDevis!: Devis[];

  constructor(private devis: DevisVehiculeService, private router: Router) { }

  onBack() {
    this.devis.init();
    this.router.navigate(['/menu/vehicules']);
  }

  ngOnInit(): void {
    // données simulées pour tester affichage
    this.allDevis = [
      { "id":1,
      "dateCreation":"2022-07-25",
      "prixTTC":66000,
      "client": {"id":1,"nom":"","prenom":"Benjamin","tel":"","adresse":"","cp":"","ville":""},
      "vehicules": [
        {"id":23,"marque":"Kia","modele":"Forte","annee":"2008","couleur":"ROUGE","quantite":2,"quantiteVendu":3,"prixHT":21699,"photo":"suv.gif"}
      ]},
      { "id":2,
      "dateCreation":"2022-07-25",
      "prixTTC":66000,
      "client": {"id":1,"nom":"","prenom":"Benjamin","tel":"","adresse":"","cp":"","ville":""},
      "vehicules": [
        {"id":23,"marque":"Kia","modele":"Forte","annee":"2008","couleur":"ROUGE","quantite":2,"quantiteVendu":3,"prixHT":21699,"photo":"suv.gif"}
      ]}
    ];
  }

}
