import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private peliculasSerive: PeliculasService){
    /*Pordiamos colocar el typo de dato de (resp), pero si lo realizamos de esta manera tendriamos que colocalor 
    en todos los lugares dode queramos llamar al metodo getcartelera, por ello lo definiremos desde el propio 
    servicio perlicuas.service
      */
    this.peliculasSerive.getcartelera().subscribe(resp => {
      console.log(resp);
      
    });
  }
}
