import { Observable, of } from 'rxjs';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Injectable } from '@angular/core';
import { Utilisateur, UTILISATEUR } from 'src/app/core/models/utilisateur';
import { ApiService } from 'src/app/core/services/api.service';
import { utilisateurHeader } from './utilisateur-form.model';
import { Profil } from 'src/app/core/models/profil';

@Injectable({
  providedIn: 'platform',
})
export class UtilisateurFormsService {
  formGrp!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService<Utilisateur>,
  ) {
    this.apiService.name = 'utilisateurs';

    this.formGrp = this.formBuilder.group({
      [UTILISATEUR.ID]: this.formBuilder.control(0, []),
      [UTILISATEUR.NOM]: this.formBuilder.control('', [Validators.required]),
      [UTILISATEUR.PRENOM]: this.formBuilder.control('', [Validators.required]),
      [UTILISATEUR.EMAIL]: this.formBuilder.control('', [
        Validators.required,
        Validators.email,
      ]),
      [UTILISATEUR.PROFIL]: this.formBuilder.control('', [Validators.required]),
    });
  }
  refresh() {
    this.formGrp.reset();
  }

  initValue(utilisateur: Utilisateur) {
    this.formGrp.get([UTILISATEUR.ID])?.setValue(utilisateur.id);
    this.formGrp.get([UTILISATEUR.NOM])?.setValue(utilisateur.nom);
    this.formGrp.get([UTILISATEUR.PRENOM])?.setValue(utilisateur.prenom);
    this.formGrp.get([UTILISATEUR.EMAIL])?.setValue(utilisateur.email);
    this.formGrp.get([UTILISATEUR.PROFIL])?.setValue(utilisateur.profil);
    console.log(this.formGrp.value);
  }

  save(titre: string): Observable<Utilisateur | null> {
    this._capitalize(UTILISATEUR.NOM);
    this._capitalize(UTILISATEUR.PRENOM);
    this._capitalize(UTILISATEUR.EMAIL);
    this._profil();

    switch (titre) {
      case utilisateurHeader[0].label:
        return this.apiService.add(this.formGrp.value);
      case utilisateurHeader[1].label:
        return this.apiService.update(this.formGrp.value);
      case utilisateurHeader[2].label:
        return this.apiService.delete(this.formGrp.value);
      default:
        return of(null);
    }
  }

  getControl(nomControl: string): AbstractControl {
    return this.formGrp.get(nomControl) as AbstractControl;
  }
  error(nomControl: string) {
    return (
      this.formGrp.get(nomControl)?.invalid &&
      this.formGrp.get(nomControl)?.touched
    );
  }

  private _capitalize(nomControl: string) {
    const str = this.getControl(nomControl)?.value;
    let letter = str.slice(0, 1).toUpperCase();
    this.getControl(nomControl)?.setValue(letter + str.slice(1).toLowerCase());
  }

  private _profil() {
    const profil = Object.entries(Profil)
      .filter((data) => data[1] == this.getControl(UTILISATEUR.PROFIL).value)
      .flatMap((data) => data[0])[0];
    this.getControl(UTILISATEUR.PROFIL)?.setValue(profil);
  }
}
