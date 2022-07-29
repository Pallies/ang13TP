import { DatePipe } from '@angular/common';
import { URL_BACK } from 'src/app/core/guards/url-back.routes';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Entretien } from 'src/app/core/models/entretien';
import { URL_SNAPSHOT } from 'src/app/core/guards/url-front.routes';
import { Client } from 'src/app/core/models/client';
import { ApiService } from 'src/app/core/services/api.service';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { ListeEntretienService } from './liste-entretien.service';

@Component({
  selector: 'app-creation',
  templateUrl: './liste-entretien.component.html',
  styleUrls: ['./liste-entretien.component.css'],
  providers: [ListeEntretienService],
})
export class ListeEntretienComponent implements OnInit {
  entretiens!: Entretien[];
  clients!: Client[];
  constructor(
    private listeService: ListeEntretienService,
    private router: Router
  ) {
    listeService.entretiens$.subscribe((data) => {
      console.log(data);
      this.entretiens = data;
    });
  }

  onBack() {
    this.router.navigate(['/menu/entretien']);
  }
  refresh() {
    this.router.navigated = false;
    this.router.navigate(['entretien/liste-entretien']);
  }
  ngOnInit(): void {}
  validerEntretien(entretien: Entretien) {
    const e = entretien;
    this.listeService.validerEntretien({...entretien}).subscribe((ePost) => {
      entretien.dateCloture=ePost.dateCloture;
      entretien.valider=ePost.valider
      this.refresh();
    });
  }
}
