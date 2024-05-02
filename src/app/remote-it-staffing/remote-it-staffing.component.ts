import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-remote-it-staffing',
  templateUrl: './remote-it-staffing.component.html',
  styleUrls: ['./remote-it-staffing.component.css']
})
export class RemoteItStaffingComponent implements OnInit {

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

    $('.resourse-profiling-slider').owlCarousel({
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
          items: 4,
        },
        1000: {
          items: 4,
        }
      }
    });
  }

}
