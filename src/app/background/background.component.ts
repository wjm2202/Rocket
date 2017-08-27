import { Component, OnInit, HostBinding, OnChanges } from '@angular/core';
import { fade } from '../animations/fade';
import { Observable } from 'rxjs/Rx';
import { routerAnimation } from '../animations/fadeInAnimation'
import { teaser, heightdown, heightup } from '../animations/teaserDownUp';
import { smoothDropper } from '../animations/smoothHeight';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser'; 

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css'],
  animations: [routerAnimation, fade, teaser, smoothDropper, heightdown, heightup],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class BackgroundComponent implements OnChanges {
  isFlipped:boolean = false;
  mobile:number = 5;
  width: any;
  ismobile:boolean;
  displayHome:boolean = true;
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

  constructor(private router: Router,
              private tite:Title) {
     //this.tite.setTitle("AUT-ECMS"+this.router.url);           
    this.router.events.subscribe((res) => { 
      this.tite.setTitle("AUT-ECMS"+this.router.url); 
      this.checkIsMobile();
      this.mobile =0;
      if(this.router.url == '/home'){
        this.displayHome = true;
        //console.log('displayHome: '+this.displayHome);
      }else{
        this.displayHome = false;
        //console.log('displayHome: '+this.displayHome);
      }
    
    });
   }
  checkIsMobile(){
    this.width = window.screen.width;
    if(this.width < 767){
      this.ismobile = true;
    }else{
      this.ismobile = false;
    }
    //console.log('is mobile test: '+this.ismobile+' screen width: '+this.width);
  }
  displayHomemeth($event){
    this.displayHome = false;
  }
  cardFlip(){
    this.isFlipped = !this.isFlipped;
  }
  onResize(event){
    if(event.target.innerWidth < 767){
      console.log('resize width: '+event.target.innerWidth);
      this.ismobile = true;
    }
    if(event.target.innerWidth > 768){
      console.log('resize width: '+event.target.innerWidth);
      this.ismobile = false;
    }
  }
  open(box:number){
    this.checkIsMobile();
    if(this.mobile == box){
      //console.log('box number same: '+box+" mobile: "+this.mobile);
      this.mobile = 0;
    }else{
      //console.log('box number differnet: '+box+" mobile: "+this.mobile);
      this.mobile = box;
    }
    
  }
  ngOnChanges(){
    this.checkIsMobile();
  }

}
