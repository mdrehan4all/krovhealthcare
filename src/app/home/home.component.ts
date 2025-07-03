import { AfterViewInit, Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { bounceOutDownOnLeaveAnimation, fadeInOnEnterAnimation, fadeInUpOnEnterAnimation, fadeOutOnLeaveAnimation, zoomInOnEnterAnimation, zoomOutOnLeaveAnimation } from 'angular-animations';

import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    zoomInOnEnterAnimation(),
    zoomOutOnLeaveAnimation(),
    fadeInUpOnEnterAnimation({ anchor: 'enter', duration: 1000, delay: 100, translate: '30px' }),
    bounceOutDownOnLeaveAnimation({ anchor: 'leave', duration: 500, delay: 200, translate: '40px' })
  ]
})
export class HomeComponent implements AfterViewInit, OnInit{


  headingVisible: boolean = false;
  headingVisible2: boolean = false;

  constructor(private el: ElementRef){}

  ngOnInit(): void {
    //AOS.init();
  }

  ngAfterViewInit(): void {
    // const observer = new IntersectionObserver((entries) => {
    //   entries.forEach(entry => {
    //     if (entry.isIntersecting) {
    //       this.headingVisible = true;
    //       console.log('Element is visible', this.headingVisible);
    //     } else {
    //       this.headingVisible = false;
    //       console.log('Element is not visible', this.headingVisible); 
    //     }
    //   });
    // });
    // observer.observe(this.el.nativeElement.querySelector('.watch-me'));
  }

  // @HostListener('window:scroll', [])
  // onScroll() {
  //   const rect = this.el.nativeElement.querySelector('.watch-me').getBoundingClientRect();
  //   const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
  //   if (isVisible) {
  //     console.log('Element is visible');
  //     this.headingVisible = true;
  //   }else{
  //     this.headingVisible = false;
  //   }
  // }
}
