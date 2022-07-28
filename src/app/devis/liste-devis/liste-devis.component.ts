import { Subscription } from 'rxjs';
import { ModalDevisService } from './../modal-liste-devis/modal-devis.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { URL_SNAPSHOT } from 'src/app/core/guards/url-front.routes';
import { Devis } from 'src/app/core/models/devis';

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
  onBack() {
    this.router.navigate(['/menu/vehicules']);
  }

  ngOnInit(): void {
    this.subcription = this.modalService.devis.subscribe((data) => (this.allDevis = data));
  }

  ngOnDestroy(): void {
    this.subcription.closed;
  }
  modalDelete(devis:Devis){
    this.modalService.open(devis);
  }
}
