import { Component, OnInit } from '@angular/core';

import { SwiperComponent } from 'swiper/angular';

import SwiperCore, {EffectCoverflow, Pagination } from 'swiper';

SwiperCore.use([EffectCoverflow, Pagination]);

@Component({
  selector: 'app-depto-muestra',
  templateUrl: './depto-muestra.component.html',
  styleUrls: ['./depto-muestra.component.scss']
})
export class DeptoMuestraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
