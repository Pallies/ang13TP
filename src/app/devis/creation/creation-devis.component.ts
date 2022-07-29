import { VehiculeVendu } from '../../core/models/vehicule-vendu';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Vehicule } from 'src/app/core/models/vehicule';
import { VehiculeVenteService } from '../vehicule-vente.service';
import { map, Observable } from 'rxjs';
import { URL_SNAPSHOT } from 'src/app/core/guards/url-front.routes';

/**
 * Composant relatif à la création d'un devis
 */
@Component({
  selector: 'app-creation',
  templateUrl: './creation-devis.component.html',
  styleUrls: ['./creation-devis.component.css'],
})
export class CreationDevisComponent implements OnInit {
  vehiculesVendus!:VehiculeVendu[]
  maj$!: Observable<boolean>;
  constructor(
    private route: ActivatedRoute,
    private vehiculeVenteService: VehiculeVenteService,
    private router: Router
  ) {
    this.vehiculesVendus = (this.route.snapshot.data[URL_SNAPSHOT.DATA_VEHICULE] as Vehicule[]).map(v=>new VehiculeVendu(v));
    this.vehiculeVenteService.init()
  }

  /**
   * Fonction qui sert à revenir à la page menu véhicules
   */
  onBack() {
    this.router.navigated = false;
    this.router.navigate(['menu', 'vehicules']);
  }

  /**
   * Fonction qui sert à l'initialisation de la page
   */
  ngOnInit(): void {
    this.maj$ = this.vehiculeVenteService.vehiculeVente.pipe(map((_) => true));
  }

  /**
   * Fonction qui permet d'ajouter le VehiculeVendu en passant par le service dédié
   * @param vehiculeVendu
   */
  ajouter(vehiculeVendu: VehiculeVendu) {
    if (
      vehiculeVendu.vehicule.quantite >= vehiculeVendu.quantiteVendu &&
      vehiculeVendu.quantiteVendu != 0
    ) {
      vehiculeVendu.vehicule.quantite -= vehiculeVendu.quantiteVendu;
      this.vehiculeVenteService.add(vehiculeVendu);
    }
  }

}
