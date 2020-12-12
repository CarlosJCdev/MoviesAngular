import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  constructor(private activatedRouter: ActivatedRoute) { }


  //Tomo los parametros que tengo en la ruta URL, y la imprimo
  ngOnInit(): void {
    //ESta es una forma, aplica solo cuando es un solo argumento en la URL
   const id= this.activatedRouter.snapshot.params.id;
    console.log(id);

    //TODO: Cuando son varios argumentos en la url, debemos usar la desestructuracion para tomar solo los que nos interezan
    //TODO:   const {id , texto, } = this,activatedRouter.snapshot.params.id;
  }

}
