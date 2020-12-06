import { Component, HostListener, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   /*Pordiamos colocar el typo de dato de (resp), pero si lo realizamos de esta manera tendriamos que colocalor 
    en todos los lugares dode queramos llamar al metodo getcartelera, por ello lo definiremos desde el propio 
    servicio perlicuas.service
      */
  /* de tipo Interface Movie es un arreglo, y lo inicializo como vacio*/
      public moviesSlideshow: Movie[]=[]
      public movies: Movie[]=[]

      /* Para realizaar un scroll infinito, primero debemos definir en que momento 
      queremos que se vallan cargando los datos, en este caso sera cuando casi lleguemos
      al final de la pantalla */
      //Husaremos un decorador de una funciòn que se dispara cuando se hace scroll
      @HostListener('window:scroll')
      onScroll(){
       const position = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
       const max = (document.documentElement.scrollHeight || document.body.scrollHeight);
        /* Cuando el scroll supera el maximo de la pantalla se agregan nuevos resulatados y se cambia de 
        pagina en la API en el servicio */


       if(position > max){
        /*Si cargando es true sale de la iteracion y ya no realizamos la llamada a la API
        Pero si es false ejecutamos el codigo, debajo para realizar la peticion a la API */
        if( this.peliculasService.cargando){ return;}

        this.peliculasService.getcartelera().subscribe( movies =>{
          this.movies.push(...movies);
        })
       }
      /*  console.log({position, max}); */
      }

     constructor(private peliculasService: PeliculasService){}
      ngOnInit(): void {
        this.peliculasService.getcartelera().subscribe(movies =>{
          //console.log(resp.results);
          this.movies= movies;
          this.moviesSlideshow= movies;
        })   
      }
    
}
