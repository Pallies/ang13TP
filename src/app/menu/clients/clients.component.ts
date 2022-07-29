import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { URL_SNAPSHOT } from 'src/app/core/guards/url-front.routes';
import { Client } from 'src/app/core/models/client';
import { clientHeader, ClientHeader } from './client-form.model';
import { ClientFormsService } from './client-forms.service';

/**
 * Composant qui sert à l'affichage des clients
 */
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  ref!: string;
  clients!: Client[];
  modalHeader: ClientHeader[] = clientHeader;
  constructor(
    private route: ActivatedRoute,
    private clientFormService: ClientFormsService,
    private router:Router
  ) {}


  /**
   * Fonction qui charge la liste des clients à l'initialisation de la page
   */
  ngOnInit(): void {
    this.clients = this.route.snapshot.data[URL_SNAPSHOT.DATA_CLIENT];
  }

  /**
   * Fonction qui sert à recharger la page en asynchrone
   */
  async refresh() {
    this.clientFormService.refresh();
    this.router.navigated=false;
    await this.router.navigate(['menu','clients']);
    this.clients=this.route.snapshot.data[URL_SNAPSHOT.DATA_CLIENT]
  }

  /**
   * Fonction qui permet de sélectionner un client
   * @param client
   */
  clientChoisi(client: Client) {
    this.clientFormService.initValue(client);
  }
}
