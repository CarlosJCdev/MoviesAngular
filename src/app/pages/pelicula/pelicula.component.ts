import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetails } from 'src/app/interfaces/cartelera-destails';
import { PeliculasService } from 'src/app/services/peliculas.service';

//TODO: NOs brinda la localizacion del usaurio en las paginas
import { Location} from '@angular/common';
import { Cast } from 'src/app/interfaces/credits-response';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public pelicula: MovieDetails;
  public cast: Cast[];

  constructor(private activatedRouter: ActivatedRoute, private peliculasService: PeliculasService, 
    private location: Location, private router: Router) { }


  //Tomo los parametros que tengo en la ruta URL, y la imprimo
  ngOnInit(): void {
    //ESta es una forma, aplica solo cuando es un solo argumento en la URL
   const id= this.activatedRouter.snapshot.params.id;
    this.peliculasService.getDetails(id).subscribe( movie =>{
      // Si movie es null o no existe
      if( !movie){
        // No retorna nada y redirecciona a la pagina de home
        this.router.navigateByUrl('/home')
        return;
      }
      console.log(movie);
      this.pelicula= movie;
    });
    //Realizamos otra peticion al servicio para que se ejecute el metodo getCredits
     this.peliculasService.getCredits(id).subscribe(cast =>{
      console.log(cast)
      this.cast= cast;
    }); 

    //TODO: Cuando son varios argumentos en la url, debemos usar la desestructuracion para tomar solo los que nos interezan
    //TODO:   const {id , texto, } = this,activatedRouter.snapshot.params.id;
  }

  onRegresar(){
    //TODO: Con la importacion de location y el metodo back, capturamos las paginas especificas donde ha estado 
    //TODO: el usuario, de esta manera podemos trackear y regresar a las paginas especificas donde ha estado el usuario
    this.location.back();
  }
}
