import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { URL_SNAPSHOT } from 'src/app/core/guards/url-front.routes';
import { Devis } from 'src/app/core/models/devis';

@Component({
  selector: 'car-liste-devis',
  templateUrl: './liste-devis.component.html',
  styleUrls: ['./liste-devis.component.css']
})
export class ListeDevisComponent implements OnInit {

  allDevis!: Devis[];

  constructor(private router: Router, private route: ActivatedRoute) { }

  onBack() {
    this.router.navigate(['/menu/vehicules']);
  }

  ngOnInit(): void {
    this.allDevis = this.route.snapshot.data[URL_SNAPSHOT.DATA_DEVIS];
  }
}
