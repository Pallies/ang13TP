import { Subscription } from 'rxjs';
import { ModalDevisService } from './../modal-liste-devis/modal-devis.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { URL_SNAPSHOT } from 'src/app/core/guards/url-front.routes';
import { Devis } from 'src/app/core/models/devis';

/**
 * Composant relatif à la liste des devis
 */
@Component({
  selector: 'car-liste-devis',
  templateUrl: './liste-devis.component.html',
  styleUrls: ['./liste-devis.component.css'],
})
export class ListeDevisComponent implements OnInit,OnDestroy {
  allDevis!: Devis[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: ModalDevisService
  ) {
    this.modalService.devis.next(
      (this.route.snapshot.data[URL_SNAPSHOT.DATA_DEVIS] as Array<Devis>).filter(d => !d.statut)
    );
  }

  subcription!:Subscription;

  /**
   * Fonction qui permet de revenir à la page menu véhicules
   */
  onBack() {
    this.router.navigate(['/menu/vehicules']);
  }

  /**
   * Fonction qui charge les devis dans le composant
   */
  ngOnInit(): void {
    this.subcription = this.modalService.devis.subscribe((data) => (this.allDevis = data));
  }

  /**
   * Fonction qui permet de fermer le modal
   */
  ngOnDestroy(): void {
    this.subcription.closed;
  }

  /**
   * Fonction qui permet d'ouvrir le modal en chargeant le devis
   * @param devis
   */
  modalDelete(devis:Devis){
    this.modalService.open(devis);
  }
}
