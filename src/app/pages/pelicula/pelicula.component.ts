import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from 'src/app/interfaces/cartelera-destails';
import { PeliculasService } from 'src/app/services/peliculas.service';

//TODO: NOs brinda la localizacion del usaurio en las paginas
import { Location} from '@angular/common';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public pelicula : MovieDetails;

  constructor(private activatedRouter: ActivatedRoute, private peliculasService: PeliculasService, private location: Location) { }


  //Tomo los parametros que tengo en la ruta URL, y la imprimo
  ngOnInit(): void {
    //ESta es una forma, aplica solo cuando es un solo argumento en la URL
   const id= this.activatedRouter.snapshot.params.id;
    //console.log(id);
    this.peliculasService.getDetails(id).subscribe( movie =>{
      console.log(movie);
      this.pelicula= movie;
    })

    //TODO: Cuando son varios argumentos en la url, debemos usar la desestructuracion para tomar solo los que nos interezan
    //TODO:   const {id , texto, } = this,activatedRouter.snapshot.params.id;
  }

  onRegresar(){
    //TODO: Con la importacion de location y el metodo back, capturamos las paginas especificas donde ha estado 
    //TODO: el usuario, de esta manera podemos trackear y regresar a las paginas especificas donde ha estado el usuario
    this.location.back();
  }

}
