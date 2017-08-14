import { Component, OnInit, HostBinding } from '@angular/core';
import { fade } from '../animations/fade';
import { animate, state, style, transition, trigger} from '@angular/animations';
import { routerAnimation } from '../animations/fadeInAnimation'

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css'],
  animations: [routerAnimation, fade],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class BackgroundComponent implements OnInit {
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

  };
  
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
    this.mobile = box;
    //console.log('ismobile: '+this.ismobile);
  }
  ngOnInit() {

  }

}
