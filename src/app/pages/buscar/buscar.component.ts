import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  /*Se usara el mètodo de activatedRoute, para poder mostrar los resultados
  que correspondan con la busqueda del usuario */
  constructor(private activatedRoute: ActivatedRoute, private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    /* Usaremos un observable, debido a que si ya estamos en la pagina de busqueda
    y realizamos varias busquedas, este a la espera del activatedRoute
    y solo actualize las peliculas en base a los cambios de las busquedas */ 
    this.activatedRoute.params.subscribe( params =>{
      //De esta manera ya tenemos como un objeto la busqueda del usuario
      console.log(params.texto);
      // TODO: Ahora llamaremos al servicio para consultar la busqueda con la API
      this.peliculasService.buscarPeliculas( params.texto).subscribe(movies =>{
        console.log(movies);
      })

    })
  }

}
