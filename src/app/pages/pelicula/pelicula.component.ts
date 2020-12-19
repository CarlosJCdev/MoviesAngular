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

  //Este cast trae toda la info sobre los detalles de las peliculas, el cual consumira la pagina slideshow
  public cast: Cast[]= [];

  constructor(private activatedRouter: ActivatedRoute, private peliculasService: PeliculasService, 
    private location: Location, private router: Router) { }


  //Tomo los parametros que tengo en la ruta URL, y la imprimo
  ngOnInit(): void {
    //ESta es una forma, aplica solo cuando es un solo argumento en la URL
   const id= this.activatedRouter.snapshot.params.id;

    // ? Cuando se ejecuta el componente, se llaman los dos observables, (getDetails, getCreadits)
    // ? los cuales podrian reducir el rendimiento de la pagina web, al ejecutarse separdamente, 
    // ? pero podemos combinar los obervables con RXJS, con el metodo CombineLatest

    /* combineLatest([
      this.peliculasService.getPeliculaDetalle(id),
      this.peliculasService.getCredits(id)
      PODEMOS REALIZAR LA DESESTRUCTURACION EN EL ARGUMENTO
      O DE MANERA TRADICIONAL;
     -- .subscribe ((obj) =>{
     --  const pelicula= obt[0];
     --  const cast= obj[1];
     --  });

    ]).subscribe(( [pelicula, cast] )=>{
      if(!pelicula){
        this.router.navigateByUrl('/home');
        return;
      }
      this.pelicula= pelicula;
      this.cast = cast.filter(actor => actor.profile_path !== null);
    });
     */

    this.peliculasService.getDetails(id).subscribe( movie =>{
      // Si movie es null o no existe
      if( !movie){
        // No retorna nada y redirecciona a la pagina de home
        this.router.navigateByUrl('/home')
        return;
      }
      /* console.log(movie); */
      this.pelicula= movie;
    });


    //Realizamos otra peticion al servicio para que se ejecute el metodo getCredits
     this.peliculasService.getCredits(id).subscribe(cast =>{
      /* console.log(cast); */
      //Ahora solo se mostraran los datos que sean diferentes de null
      this.cast= cast.filter(actor => actor.profile_path !== null);
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
