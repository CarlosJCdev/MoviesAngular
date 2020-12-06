import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  /* Con este pipe controlamos las imagenes que no vienen con la API, entonces
  si el valir es null, mostramos la imagen en assets de imagen no disponible
  pero por el contrario si la imagen esta disponible la muestra */
  transform(poster: string): string {

    if (poster){
      return `https://image.tmdb.org/t/p/w500${ poster }`;
    } else{
      return './assets/no-image.jpg';
    }

  }

}
