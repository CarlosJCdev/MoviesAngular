import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarteleraMovies } from '../interfaces/cartelera-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor( private http: HttpClient) { }
  /* En este punto definimos el tipo de nuestro mètodo, en este caso de tipo CarteleraMovies, y ahora 
  si lo llamamos en otro lugar no tendremo que definir el tipo */
  getcartelera(): Observable<CarteleraMovies> {
   return this.http.get<CarteleraMovies>('https://api.themoviedb.org/3/movie/now_playing?api_key=e908733e35fdf11035afac3436393466&language=en-US&page=1');
  }
}
