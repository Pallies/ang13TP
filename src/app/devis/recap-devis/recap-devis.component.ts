import { Utilisateur } from './../../core/models/utilisateur';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Vehicule } from 'src/app/core/models/vehicule';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DevisVehiculeService } from '../devis-vehicule.service';

@Component({
  selector: 'app-recap-devis',
  templateUrl: './recap-devis.component.html',
  styleUrls: ['./recap-devis.component.css'],
})
export class RecapDevisComponent implements OnInit, OnDestroy {
  venteVehicules!: Vehicule[];
  clients!:Utilisateur[];
  subscription!: Subscription;

  constructor(private devis: DevisVehiculeService,private route:ActivatedRoute,private router:Router) {}

  ngOnInit(): void {
    this.clients=this.route.snapshot.data['dataClients']
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

  ngOnDestroy(): void {
    this.subscription.closed;
  }
}
