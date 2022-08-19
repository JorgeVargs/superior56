import { Component, OnInit } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

import SwiperCore, {Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.scss']
})
export class DepartamentosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // onSwiper([Swiper]) {
  //   console.log(Swiper);
  // }

}
