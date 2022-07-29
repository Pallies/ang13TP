import { ModalDevisService } from './modal-devis.service';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

/**
 * Composant qui va servir au modal sur la liste des devis
 */
@Component({
  selector: 'car-modal-liste-devis',
  templateUrl: './modal-liste-devis.component.html',
  styleUrls: ['./modal-liste-devis.component.css'],
})
export class ModalListeDevisComponent implements OnInit {
  @Input() ref!: string;
  @ViewChild('close', { static: false }) dimiss!: ElementRef;
  constructor(private modalService: ModalDevisService) {}

  /**
   * Fonction qui permet de retourner la quantité totale et le prix d'un devis
   */
  ngOnInit(): void {}
  get id() {
    return this.modalService.devisDeleted.id;
  }
  get quantite() {
    return this.modalService.devisDeleted.quantiteTotal;
  }
  get prixTTC() {
    return this.modalService.devisDeleted.prixHT + this.modalService.devisDeleted.prixHT * 0.2;
  }

  /**
   * Fonction qui permet de supprimer un élément devis
   */
  deleteDevis() {
    this.modalService
      .delete()
      .subscribe((_) => this.dimiss.nativeElement.click());
  }
}
