import { Subscription } from 'rxjs';
import { UTILISATEUR } from './../../../core/models/utilisateur';
import { Profil } from 'src/app/core/models/profil';
import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { UtilisateurFormsService } from '../utilisateur-forms.service';

@Component({
  selector: 'car-utilisateur-forms',
  templateUrl: './utilisateur-forms.component.html',
  styleUrls: ['./utilisateur-forms.component.css'],
})
export class UtilisateurFormsComponent implements OnInit, OnDestroy {
  public profil = Object.values(Profil);

  @Input() ref!: string;
  @Input() titre!: string;

  @Output() updateUtilisateur: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('close', { static: false })
  dimiss!: ElementRef;
  modalRef!: ElementRef;
  UTILISATEUR: typeof UTILISATEUR = UTILISATEUR;
  subscription!: Subscription;
  constructor(private utilisateurFormService: UtilisateurFormsService) {}

  saveUtilisateur() {
    if (this.utilisateurForm.valid) {
      this.subscription = this.utilisateurFormService
        .save(this.titre)
        ?.subscribe((_) => {
          this.updateUtilisateur.emit();
        });
      this.dimiss.nativeElement.click();
    }
  }
  ngOnInit(): void {}

  get utilisateurForm() {
    return this.utilisateurFormService.formGrp;
  }

  get utilisateurService() {
    return this.utilisateurFormService;
  }

  ngOnDestroy(): void {
    this.subscription?.closed;
  }
}
