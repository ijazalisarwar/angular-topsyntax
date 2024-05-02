import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {

    $('.services-slider').owlCarousel({
      dots: true,
      dotData: true,
      autoplay: false,
      lazyLoad: true,
      loop: false,
      responsiveClass: true,
      autoHeight: true,
      autoplayTimeout: 7000,
      smartSpeed: 800,
      nav: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        }
      }
    });

  }

}
