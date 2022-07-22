import { Utilisateur } from './../../core/models/utilisateur';
import { ActivatedRoute } from '@angular/router';
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
  utilisateur!:Utilisateur[];
  subscription!: Subscription;
  constructor(private devis: DevisVehiculeService,private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.utilisateur=this.route.snapshot.data['dataUtilisateurs']
    this.subscription = this.devis.commande.subscribe(
      (data) => (this.venteVehicules = data)
    );
  }
  ngOnDestroy(): void {
    this.subscription.closed;
  }
}
