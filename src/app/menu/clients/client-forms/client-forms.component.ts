import { Client, CLIENT } from './../../../core/models/client';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { ClientFormsService } from '../client-forms.service';

@Component({
  selector: 'car-client-forms',
  templateUrl: './client-forms.component.html',
  styleUrls: ['./client-forms.component.css'],
})
export class ClientFormsComponent implements OnInit {
  @Input() ref!: string;
  @Input() titre!: string;

  @Output() updateClient: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('close', { static: false })
  dimiss!: ElementRef;
  modalRef!: ElementRef;
  CLIENT: typeof CLIENT = CLIENT;
  constructor(private clientFormService: ClientFormsService) {}

  saveClient() {
    console.log(this.clientForm.value)
    console.log(this.clientForm.valid)
    if (this.clientForm.valid) {
      this.clientFormService.save(this.titre)?.subscribe(_=> {
        this.updateClient.emit();
      });
      this.dimiss.nativeElement.click();
    }
  }
  ngOnInit(): void {
  }
  get clientForm() {
    return this.clientFormService.formGrp;
  }
  get clientService(){
    return this.clientFormService;
  }
}
