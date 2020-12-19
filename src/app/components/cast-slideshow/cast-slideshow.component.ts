import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/interfaces/credits-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styleUrls: ['./cast-slideshow.component.css']
})
export class CastSlideshowComponent implements OnInit, AfterViewInit {

  //Recibimos info desde Pages/movies, de esta manera recibimos data de otro componente
  @Input() cast: Cast[];

  constructor() { }

  ngOnInit(): void {
    /* console.log(this.cast); */
  }

  /* Metodo de ciclo de vida en angular, 
    Primero colocamos la clase del elemento de referencia para prescentarlo
    y despues las propiedades que tendra el elemento*/
    //TODO: Con el metodo ngAfterViewInit, nos aseguramos que cuando se inicialize el componente tambien inicie el metodo
  ngAfterViewInit(){
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15
    })
  }

}
