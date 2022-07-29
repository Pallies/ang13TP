import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { filter, Subscription } from "rxjs";
import { URL_SNAPSHOT } from "src/app/core/guards/url-front.routes";
import { Client } from "src/app/core/models/client";
import { Devis, DEVIS } from "src/app/core/models/devis";
import { VehiculeVendu } from "src/app/core/models/vehicule-vendu";
import { ApiService } from "src/app/core/services/api.service";
import { DevisVenteService } from "../devis-vente.service";
import { VehiculeVenteService } from "../vehicule-vente.service";

/**
 * Composant qui permet l'affichage du récapitulatif d'un devis
 */
@Component({
  selector: 'app-recap-devis',
  templateUrl: './recap-devis.component.html',
  styleUrls: ['./recap-devis.component.css'],
})
export class RecapDevisComponent implements OnInit, OnDestroy {
  vehiculesVendus!: VehiculeVendu[];
  clients!: Client[];
  clientSelection!:Client;
  devis:typeof DEVIS=DEVIS;
  subscription: Subscription=new Subscription();

  constructor(
    public devisService:DevisVenteService,
    private venteService: VehiculeVenteService,
    private api: ApiService<Client>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  /**
   * Fonction qui va charger les clients et les véhicules contenus dans le devis
   * à l'initialisation de la page
   */
  ngOnInit(): void {
    this.clients = this.route.snapshot.data[URL_SNAPSHOT.DATA_CLIENT];
    this.api.getAll();
    this.subscription.add(this.venteService.vehiculeVente.subscribe(
      (data) => (this.vehiculesVendus = data)
    ))
    this.subscription.add(this.devisService.devis.pipe(filter((data: Devis)=>data.id!=0)).subscribe(_=>this.router.navigate(['/menu'])))
  }
  get quantiteTotal(): number {
    return this.venteService.quantiteTotal;
  }
  get prixTotal(): number {
    return this.venteService.prixTotalHT;
  }
  get prixTotalTTC():number{
    return this.prixTotal + this.prixTotal * 0.2
  }

  /**
   * Fonction qui permet de revenir à la page menu véhicules
   */
  onBack() {
    this.router.navigated = false;
    this.router.navigate(['menu', 'vehicules']);
  }

  /**
   * Fonction qui permet d'enregistrer un devis dans le db.json
   */
  ajouter(){
    this.devisService.save(this.clientSelection)
  }

  ngOnDestroy(): void {
    this.subscription.closed;
  }
}
