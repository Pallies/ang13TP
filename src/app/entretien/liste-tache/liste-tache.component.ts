import { Subscription } from 'rxjs';
import { Tache } from 'src/app/core/models/tache';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ListeTacheService } from './liste-tache.service';

@Component({
  selector: 'car-liste-tache',
  templateUrl: './liste-tache.component.html',
  styleUrls: ['./liste-tache.component.css'],
  providers: [ListeTacheService],
})
export class ListeTacheComponent implements OnInit, OnDestroy {
  prioriteSelection!: string;
  taches!: Tache[];
  subscription: Subscription = new Subscription();
  constructor(
    private router: Router,
    private tacheService: ListeTacheService
  ) {}
  priorites: string[] = ['Urgente', 'Importante', 'Moyenne', 'mineure'];
  onBack() {
    this.router.navigate(['/entretien/liste-entretien']);
  }

  ngOnInit(): void {
    this.subscription.add(
      this.tacheService.entretienId.subscribe((id) => {
        this.tacheService.rechercheTache(id);
      })
    );
    this.subscription.add(
      this.tacheService.tache.subscribe((tache) => (this.taches = tache))
    );
  }
  ngOnDestroy(): void {
    this.subscription.closed;
  }
}
