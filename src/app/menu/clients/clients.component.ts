import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/core/models/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients!: Client[];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.clients=this.route.snapshot.data['dataClients'];
  }

}
