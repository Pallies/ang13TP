import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { URL_SNAPSHOT } from 'src/app/core/guards/url-front.routes';
import { Devis } from 'src/app/core/models/devis';
import { Vehicule } from 'src/app/core/models/vehicule';
import { VehiculeVendu, VenteVehicule } from 'src/app/core/models/vehicule-vendu';

/**
 * Composant qui sert à générer la facture en PDF
 */
@Component({
  selector: 'car-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {

  vehicules!: Vehicule[];
  devis!: Devis;
  venteVehicules!: VehiculeVendu[];
  prixTTC!: number;
  qteTotale!: number;
  prixTotal!: number;

  @ViewChild('invoice') invoiceElement!: ElementRef;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.vehicules = this.route.snapshot.data[URL_SNAPSHOT.DATA_VEHICULE];
    this.devis = this.route.snapshot.data[URL_SNAPSHOT.DATA_VENTE_VEHICULE];
  }

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

  public generatePDF(): void {
    html2canvas(this.invoiceElement.nativeElement, { scale: 3 }).then((canvas) => {
      const imageGeneratedFromTemplate = canvas.toDataURL('image/png');
      const fileWidth = 200;
      const generatedImageHeight = (canvas.height * fileWidth) / canvas.width;
      let PDF = new jsPDF('p', 'mm', 'a4',);
      PDF.addImage(imageGeneratedFromTemplate, 'PNG', 0, 5, fileWidth, generatedImageHeight,);
      PDF.html(this.invoiceElement.nativeElement.innerHTML)
      PDF.save('facture'+this.devis.client.nom+'.pdf');
    });
  }

  onBack(){
    this.router.navigate(['/factures/liste']);
  }

}
