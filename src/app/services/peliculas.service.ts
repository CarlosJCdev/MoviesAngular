import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CarteleraMovies, Movie } from '../interfaces/cartelera-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  /* Decentralizamos la llamada a la API key separandola en los datos estaticos  */
  private urlbase: string = 'https://api.themoviedb.org/3';
  private carteleraPage= 1;
  public cargando: boolean= false;


  get params(){
    return{
      api_key: 'e908733e35fdf11035afac3436393466',
      language: 'en-US',
      page: this.carteleraPage.toString()
    }
  }

  constructor( private http: HttpClient) { }
  /* En este punto definimos el tipo de nuestro mètodo, en este caso de tipo CarteleraMovies, y ahora 
  si lo llamamos en otro lugar no tendremo que definir el tipo */


  getcartelera(): Observable<Movie[]> {

    if( this.cargando){
      //Si estan cargando las peliculas, regreso un arreglo vacio
      return of( [])
    }

    console.log('cargando API');
    this.cargando= true;

   return this.http.get<CarteleraMovies>(`${this.urlbase}/movie/now_playing`, {params: this.params}).pipe(
     map((resp) => resp.results ),
     tap( ()=>{
       this.carteleraPage += 1;
       this.cargando= false;
     })
   );
  }

  buscarPeliculas(texto: string): Observable<Movie[]>{
    /* Para la paginacion, no necesitamos la paginacòn, por ello la paginacion la definimos en 1  */
    //TODO: Desestructure params para modificar la paginacion y definirma en 1, al igual que el texto
    const params = {...this.params, page: '1', query: texto};
    /* Realizo la consulta a la API, especificamos que los resultados son de tipo carteleramovies */
   return this.http.get<CarteleraMovies>(`${this.urlbase}/search/movie`,{
     //En base al EcmaEscript 6, no es necesario mandar llamar a la propiedad 2 veces params: params
     params
    }).pipe(
      map( resp => resp.results)
    )
  }
      //TODO: Cada que nos movemos de paginas la paginacion se mantendra en la 1
  resetMoviepage(){
    this.carteleraPage= 1;
  }


}
