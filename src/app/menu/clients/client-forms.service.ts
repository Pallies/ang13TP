import { Observable } from 'rxjs';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Injectable } from '@angular/core';
import { Client, CLIENT } from 'src/app/core/models/client';
import { ApiService } from 'src/app/core/services/api.service';
import { clientHeader } from './client-form.model';

@Injectable({
  providedIn: 'platform',
})
export class ClientFormsService {
  formGrp!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService<Client>
  ) {
    this.apiService.name = 'clients';

    this.formGrp = this.formBuilder.group({
      [CLIENT.ID]: this.formBuilder.control(0, []),
      [CLIENT.NOM]: this.formBuilder.control('', [Validators.required]),
      [CLIENT.PRENOM]: this.formBuilder.control('', [Validators.required]),
      [CLIENT.TEL]: this.formBuilder.control('', [
        Validators.pattern(/[0-9]{10}/),
      ]),
      [CLIENT.ADRESSE]: this.formBuilder.control('', [Validators.required]),
      [CLIENT.CODE_POSTAL]: this.formBuilder.control('', [
        Validators.required,
        Validators.pattern(/[0-9]{5}/),
      ]),
      [CLIENT.VILLE]: this.formBuilder.control('', [Validators.required]),
    });
  }
  refresh() {
    this.formGrp.reset();
  }
  initValue(client: Client) {
    this.formGrp.get([CLIENT.ID])?.setValue(client.id);
    this.formGrp.get([CLIENT.NOM])?.setValue(client.nom);
    this.formGrp.get([CLIENT.PRENOM])?.setValue(client.prenom);
    this.formGrp.get([CLIENT.TEL])?.setValue(client.tel);
    this.formGrp.get([CLIENT.ADRESSE])?.setValue(client.adresse);
    this.formGrp.get([CLIENT.CODE_POSTAL])?.setValue(client.cp);
    this.formGrp.get([CLIENT.VILLE])?.setValue(client.ville);
    console.log(this.formGrp.value);
  }
  save(titre: string): Observable<Client> | null {
    this._capitalize(CLIENT.NOM)
    this._capitalize(CLIENT.PRENOM)
    this._capitalize(CLIENT.VILLE)

    switch (titre) {
      case clientHeader[0].label:
        return this.apiService.add(this.formGrp.value);
      case clientHeader[1].label:
        return this.apiService.update(this.formGrp.value);
        case clientHeader[2].label:
        return this.apiService.delete(this.formGrp.value);
      default:
        return null;
    }
  }

  getControl(nomControl: string): AbstractControl {
    return this.formGrp.get(nomControl) as AbstractControl;
  }
  error(nomControl: string) {
    if(nomControl=='cp'){
      console.log(this.formGrp.get(nomControl)?.errors?.['required'])
    }
    return (
      this.formGrp.get(nomControl)?.invalid &&
      this.formGrp.get(nomControl)?.touched
    );
  }

  private _capitalize(nomControl:string){
    const str=this.getControl(nomControl)?.value
    let letter=str.slice(0,1).toUpperCase()
    this.getControl(nomControl)?.setValue(letter+str.slice(1).toLowerCase());
  }
}
