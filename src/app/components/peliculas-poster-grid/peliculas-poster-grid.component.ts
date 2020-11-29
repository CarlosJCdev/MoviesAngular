import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {

  /* En este caso no necesitamos inyectar al servicio y mostrarlo, simplemente
  rehusamos lo ya inyeccion que ya habiamos realizado en el Home, y 
  simplemente llamamos al input y lo imprimimos */
  @Input() movies: Movie[]= [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.movies);
  }

}
