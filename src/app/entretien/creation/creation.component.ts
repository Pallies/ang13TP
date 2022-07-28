import { Produit } from 'src/app/core/models/produit';
import { MenuPrestaService } from './menu-presta.service';
import { Entretien } from './../../core/models/entretien';
import { URL_SNAPSHOT } from 'src/app/core/guards/url-front.routes';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/core/models/client';
import { Tache } from 'src/app/core/models/tache';
import { filter, Observable } from 'rxjs';

@Component({
  selector: 'car-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css'],
})
export class CreationEntretienComponent implements OnInit {
  clients: Client[];
  clientSelection!: Client;
  taches: Tache[] = [];
  entretien$!: Observable<Entretien>;
  dateSelection!: string;
  prixTotal_TTC: number = 0;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private menuService: MenuPrestaService
  ) {
    this.clients = this.route.snapshot.data[URL_SNAPSHOT.DATA_CLIENT];
    this.menuService.initMenu(
      this.route.snapshot.data[URL_SNAPSHOT.DATA_TACHE]
    );
  }

  ngOnInit(): void {
    this.entretien$ = this.menuService.entretien;
    this.entretien$.subscribe((e) => {
      if (e.taches.length > 0)
        this.prixTotal_TTC = this.calculTva(e)
      else this.prixTotal_TTC = 0;
    });
  }
  onBack() {
    this.router.navigated = false;
    this.router.navigate(['menu', 'entretien']);
  }
  sauvegardePrestations() {
    console.log(this.clientSelection, this.dateSelection);
  }
  suppressionTache(index: number) {
    this.menuService.suppressionTache(index);
  }

  get estValide(): boolean {
    return (
      this.clientSelection != undefined &&
      this.dateSelection != undefined &&
      this.prixTotal_TTC > 0
    );
  }
  calculTva(e:Entretien){
   const prix= e.taches
        .flatMap((t) => t.produits)
        .map((p) => p.quantite * p.prix)
        .reduce((a, b) => b + a);
        return prix+prix*0.2
  }
}
