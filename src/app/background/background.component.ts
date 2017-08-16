import { Component, OnInit, HostBinding } from '@angular/core';
import { fade } from '../animations/fade';
import { Observable } from 'rxjs/Rx';
import { routerAnimation } from '../animations/fadeInAnimation'
import { teaser, heightdown, heightup } from '../animations/teaserDownUp';
import { smoothDropper } from '../animations/smoothHeight';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css'],
  animations: [routerAnimation, fade, teaser, smoothDropper, heightdown, heightup],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class BackgroundComponent implements OnInit {
  isFlipped:boolean = false;
  mobile:number = 5;
  width: any;
  ismobile:boolean;
  configs = {
    loop: true,
    margin: 1,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2500,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }

  }

  cardFlip(){
    this.isFlipped = !this.isFlipped;
  }
  onResize(event){
    if(event.target.innerWidth <= 768){
      this.ismobile = true;
    }
    if(event.target.innerWidth > 768){
      this.ismobile = false;
    }
  }
  constructor() {
    this.checkIsMobile();
   }
  checkIsMobile(){
    this.width = window.screen.width;
    //console.log('screen size: '+this.width);
    if(this.width < 767){
      this.ismobile = true;
    }else{
      this.ismobile = false;
    }
  }

  open(box:number){
    this.checkIsMobile();
    if(this.mobile == box){
      this.mobile = 0;
    }else{
      this.mobile = box;
    }
    
  }
  ngOnInit() {

  }

}
