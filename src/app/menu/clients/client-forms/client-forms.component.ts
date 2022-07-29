import { Subscription } from 'rxjs';
import { CLIENT } from './../../../core/models/client';
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
import { ClientFormsService } from '../client-forms.service';

/**
 * Composant qui va servir à enregistrer ou modifier les informations d'un client
 */
@Component({
  selector: 'car-client-forms',
  templateUrl: './client-forms.component.html',
  styleUrls: ['./client-forms.component.css'],
})
export class ClientFormsComponent implements OnInit, OnDestroy {
  @Input() ref!: string;
  @Input() titre!: string;

  @Output() updateClient: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('close', { static: false })
  dimiss!: ElementRef;

  CLIENT: typeof CLIENT = CLIENT;
  subscription!: Subscription;
  constructor(private clientFormService: ClientFormsService) {}

  /**
   * Fonction qui sert à enregistrer ou mettre à jour un client
   */
  saveClient() {
    if (this.clientForm.valid) {
      this.subscription = this.clientFormService
        .save(this.titre)
        ?.subscribe((_) => {
          this.updateClient.emit();
        });
      this.dimiss.nativeElement.click();
    }
  }
  ngOnInit(): void {}
  get clientForm() {
    return this.clientFormService.formGrp;
  }
  get clientService() {
    return this.clientFormService;
  }
  ngOnDestroy(): void {
    this.subscription?.closed;
  }
}
