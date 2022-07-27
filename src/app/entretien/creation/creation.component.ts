import { Entretien } from './../../core/models/entretien';
import { URL_SNAPSHOT } from 'src/app/core/guards/url-front.routes';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/core/models/client';
import { Tache } from 'src/app/core/models/tache';

@Component({
  selector: 'car-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css'],
})
export class CreationEntretienComponent implements OnInit {
  clients: Client[];
  clientSelection!:Client;
  taches:Tache[]=[];
  entretien!:Entretien;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.clients = this.route.snapshot.data[URL_SNAPSHOT.DATA_CLIENT];
    this.taches=this.route.snapshot.data[URL_SNAPSHOT.DATA_TACHE]
  }

  ngOnInit(): void {
    this.entretien=new Entretien();
    console.log(this.taches)
  }
  onBack() {
    this.router.navigated = false;
    this.router.navigate(['menu', 'entretien']);
  }
  savePrestations(){}
}
