import { ModalDevisService } from './modal-devis.service';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Devis } from 'src/app/core/models/devis';

@Component({
  selector: 'car-modal-liste-devis',
  templateUrl: './modal-liste-devis.component.html',
  styleUrls: ['./modal-liste-devis.component.css'],
})
export class ModalListeDevisComponent implements OnInit {
  @Input() ref!: string;
  @ViewChild('close', { static: false }) dimiss!: ElementRef;
  constructor(private modalService: ModalDevisService) {}

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
  deleteDevis() {
    this.modalService
      .delete()
      .subscribe((_) => this.dimiss.nativeElement.click());
  }
}
