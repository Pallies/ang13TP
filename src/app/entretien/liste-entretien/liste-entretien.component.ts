import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Entretien } from 'src/app/core/models/entretien';
import { URL_SNAPSHOT } from 'src/app/core/guards/url-front.routes';
import { Client } from 'src/app/core/models/client';

@Component({
  selector: 'app-creation',
  templateUrl: './liste-entretien.component.html',
  styleUrls: ['./liste-entretien.component.css'],
})
export class ListeEntretienComponent implements OnInit {
  entretiens!: Entretien[];
  clients!: Client[];

  constructor(private route: ActivatedRoute, private router: Router) {

    this.clients = this.route.snapshot.data[URL_SNAPSHOT.DATA_CLIENT],

    this.entretiens = [
      this.route.snapshot.data[URL_SNAPSHOT.DATA_ENTRETIEN],
    ].flatMap((e) => {
      let client = new Client();
      e.client = this.clients[e.clientId] as Client;
      return e;
    });
    console.log(this.entretiens);
  }

  onBack() {
    this.router.navigate(['/menu/entretien']);
  }

  ngOnInit(): void {}
}
