import { ModalDevisService } from './modal-devis.service';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Devis } from 'src/app/core/models/devis';

@Component({
  selector: 'car-modal-liste-devis',
  templateUrl: './modal-liste-devis.component.html',
  styleUrls: ['./modal-liste-devis.component.css'],
  providers: [ModalDevisService],
})
export class ModalListeDevisComponent implements OnInit {
  @Input() ref!: string;
  @Input() devis!: Devis;
  @ViewChild('close', { static: false }) dimiss!: ElementRef;
  constructor(private modalService: ModalDevisService) {}

  ngOnInit(): void {
    this.devis;
  }
  get id() {
    return this.devis.id;
  }
  get quantite() {
    return this.devis.quantiteTotal;
  }
  get prixTTC() {
    return this.devis.prixHT + this.devis.prixHT * 0.2;
  }
  deleteDevis() {
    this.modalService
      .delete(this.devis)
      .subscribe((_) => this.dimiss.nativeElement.click());
  }
}
