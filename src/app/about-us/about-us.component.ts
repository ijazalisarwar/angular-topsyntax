import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {

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
