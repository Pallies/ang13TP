import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { URL_SNAPSHOT } from 'src/app/core/guards/url-front.routes';
import { Devis, DevisValidation } from 'src/app/core/models/devis';
import { Vehicule } from 'src/app/core/models/vehicule';
import { VehiculeVendu, VenteVehicule } from 'src/app/core/models/vehicule-vendu';
import { ApiService } from 'src/app/core/services/api.service';

/**
 * Composant relatif à la validation d'un devis
 */
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

  constructor(private route: ActivatedRoute, private apiService: ApiService<DevisValidation>, private router: Router){
    this.vehicules = this.route.snapshot.data[URL_SNAPSHOT.DATA_VEHICULE];
    this.devis = this.route.snapshot.data[URL_SNAPSHOT.DATA_VENTE_VEHICULE];
  }

  /**
   * Fonction qui permet de charger tous les véhicules du devis
   * à l'initialisation de la page
   */
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

  /**
   * Fonction qui permet de changer le statut d'un devis
   */
  changeStatut(){
    this.devis.statut = true;
    const devisValidation = new DevisValidation(this.devis);

    this.apiService.name = "devis";
    this.apiService.update(devisValidation).subscribe(_ => this.router.navigate(['factures/', this.devis.id]));
  }

  /**
   * Fonction qui permet un retour sur la liste des devis
   */
  onBack(){
    this.router.navigate(['/devis/liste']);
  }

}
