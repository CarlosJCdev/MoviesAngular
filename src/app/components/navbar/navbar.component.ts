import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //Para navegar entre las paginas importo el componente Router
  constructor( private router: Router) { }

  ngOnInit(): void {
  }
/* Capturamos los datos ingresador del usuario*/
  buscarPelicula(texto: string){
    //Con el metodo trim elminamos los espacios en blanco tanto delate y detras del texto
    texto= texto.trim();
    //Si no se escribe nada en la caja de texto entonces no realizamos nada
    if (texto.length === 0){
      return;
    }
    /*Navegamos hasta la pagina de busquedas, en donde recibe un arreglo de 2 segmentos,
    la ruta de la pagina y el texto capturado del ususario */
    this.router.navigate(['/buscar', texto]);
  }

}
