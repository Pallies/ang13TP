import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Vehicule } from 'src/app/core/models/vehicule';

@Component({
  selector: 'app-creation',
  templateUrl: './creation-devis.component.html',
  styleUrls: ['./creation-devis.component.css'],
})
export class CreationDevisComponent implements OnInit {
  vehicules!: Vehicule[];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.vehicules = this.route.snapshot.data['dataVehicules'];
  }
}
