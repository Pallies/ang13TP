import { Vehicule } from 'src/app/core/models/vehicule';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recap-devis',
  templateUrl: './recap-devis.component.html',
  styleUrls: ['./recap-devis.component.css']
})
export class RecapDevisComponent implements OnInit {

  venteVehicules!:Vehicule[];

  constructor() { }

  ngOnInit(): void {
  }

}
