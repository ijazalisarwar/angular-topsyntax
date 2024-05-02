import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    $('.header-slider').owlCarousel({
      dots: true,
      dotData: true,
      autoplay: true,
      lazyLoad: true,
      loop: true,
      responsiveClass: true,
      autoHeight: true,
      autoplayTimeout: 7000,
      smartSpeed: 800,
      nav: false,
      responsive: {
        0: {
          items: 1
        }
      }
    });

    // services slider

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

    // success stories images

    $('.success-story-slider').owlCarousel({
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
          items: 1
        }
      }
    });

  }

}
