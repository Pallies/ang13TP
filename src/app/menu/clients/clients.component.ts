import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/core/models/client';
import { clientHeader, ClientHeader } from './client-form.model';
import { ClientFormsService } from './client-forms.service';

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


  ngOnInit(): void {
    this.clients = this.route.snapshot.data['dataClients'];
  }
  async refresh() {
    this.clientFormService.refresh();
    this.router.navigated=false;
    await this.router.navigate(['menu','clients']);
    this.clients=this.route.snapshot.data['dataClients']
  }
  clientChoisi(client: Client) {
    this.clientFormService.initValue(client);
  }
}
