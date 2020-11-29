import { AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  //Recibimos desde el componente padre movies que es de tipo Movie y es un array o listado
  @Input() movies: Movie[];
  public mySwiper: Swiper; // Solo defino el objeto pero no inicializo, por ende es undefined

  constructor() { }

  ngAfterViewInit(): void{ 
    this.mySwiper= new Swiper('.swiper-container', {
      //El loop simula que el scroll no tiene fin
      loop: true,
    });
  }

  ngOnInit(): void {
    /* console.log(this.movies); */
  }
  

  /*PAra poder hacer instancia a mySwiper, debo sacar la referencia que esta dentro
  del mètodo de ngAfterViewInit, por ello creo una referencia global y en el mètodo
  la especifico hay tambien, de esta manera podrè usar la referencia de mySwiper en otro metodos */
  onSlideNext(){
   this.mySwiper.slideNext();
  }
  onSlidePrev(){
    this.mySwiper.slidePrev();
  }


}
