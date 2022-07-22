import { ApiService } from './../../core/services/api.service';
import { Utilisateur } from './../../core/models/utilisateur';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Vehicule } from 'src/app/core/models/vehicule';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DevisVehiculeService } from '../devis-vehicule.service';
import { Client } from 'src/app/core/models/client';

@Component({
  selector: 'app-recap-devis',
  templateUrl: './recap-devis.component.html',
  styleUrls: ['./recap-devis.component.css'],
})
export class RecapDevisComponent implements OnInit, OnDestroy {
  venteVehicules!: Vehicule[];
  clients!:Client[];
  subscription!: Subscription;

  constructor(private devis: DevisVehiculeService,private api:ApiService<Client>,private route:ActivatedRoute,private router:Router) {
    this.api.name='clients'
  }

  ngOnInit(): void {
    this.clients=this.route.snapshot.data['dataClients']
    this.api.getAll();
    this.subscription = this.devis.commande.subscribe(
      (data) => (this.venteVehicules = data)
    );
  }
  get quantiteTotal():number{
    return this.devis.quantiteTotal;
  }
  get prixTotal():number{
    return this.devis.prixTotalHT;
  }
  onBack() {
    this.router.navigated=false;
    this.api.name='vehicules'
    this.router.navigate(['menu','vehicules']);
  }
  ngOnDestroy(): void {
    this.subscription.closed;
  }
}
