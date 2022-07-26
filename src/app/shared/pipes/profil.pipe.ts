import { Pipe, PipeTransform } from '@angular/core';
import { Profil } from 'src/app/core/models/profil';

@Pipe({
  name: 'profil',
})
export class ProfilPipe implements PipeTransform {
  transform(profil: Profil): unknown {
    return Object.entries(Profil)
      .filter((data) => data[0] == profil)
      .flatMap((data) => data[1]);
  }
}
