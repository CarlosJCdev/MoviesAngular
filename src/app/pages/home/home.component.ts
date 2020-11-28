import { Component, OnInit } from '@angular/core';
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
      public movies: Movie[]=[]

     constructor(private peliculasService: PeliculasService){}
      ngOnInit(): void {
        this.peliculasService.getcartelera().subscribe(resp =>{
          //console.log(resp.results);
          this.movies= resp.results;
        })   
      }
     
    
}
