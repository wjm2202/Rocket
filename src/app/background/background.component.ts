import { Component, OnInit, HostBinding, OnChanges, AfterViewInit,ElementRef } from '@angular/core';
import { fade } from '../animations/fade';
import { Observable } from 'rxjs/Rx';
import { routerAnimation } from '../animations/fadeInAnimation'
import { teaser, heightdown, heightup } from '../animations/teaserDownUp';
import { smoothDropper } from '../animations/smoothHeight';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser'; 
import { DatePipe } from '@angular/common';
import { DateService } from '../services/currentDate.service';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css'],
  providers: [ DatePipe],
  animations: [routerAnimation, fade, teaser, smoothDropper, heightdown, heightup],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class BackgroundComponent implements OnChanges, AfterViewInit {
  head:string = 'card-header-300px.jpg';
  logo:string = 'sponsorLogoPlaceholder.jpg';
  create:string = 'Create An Award';
  blurb:string = 'Describe your company and products';
  awardImage:string = 'ICT-Awards-2015-9.jpg';
  viewPort;
  element:Element;
  sponsorEL:Element;
  awardEL:Element;
  photoEL:Element;
  contactEL:Element;
  isFlipped:boolean = false;
  mobile:number = 5;
  width: any;
  ismobile:boolean;
  displayHome:boolean = true;
  current;
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
              private tite:Title,
              private datePipe:DatePipe,
              private dateService:DateService) {        
    this.router.events.subscribe((res) => { 
      this.tite.setTitle("AUT-ECMS"+this.router.url); 
      this.checkIsMobile();
      this.mobile =0;
      if(this.router.url == '/home'){
        this.displayHome = true;
        window.scrollTo(0, 0);
      }else{
        this.displayHome = false;
      }
      this.current = Date.now();
      this.current = this.datePipe.transform(this.current, 'yyyy');
    });
   }
   ngAfterViewInit(){
    this.element = document.getElementById("laptopTop");
    //console.log('laptop '+this.element.getBoundingClientRect().top);
   }

  checkIsMobile(){
    this.width = window.screen.width;
    if(this.width < 767){
      this.ismobile = true;
    }else{
      this.ismobile = false;
    }
  }
  displayHomemeth($event){
    this.displayHome = false;
  }
  cardFlip(){
    this.isFlipped = !this.isFlipped;
  }
  onResize(event){
    if(event.target.innerWidth < 767){
      this.ismobile = true;
    }
    if(event.target.innerWidth > 768){
      this.ismobile = false;
    }
  }
  open(box:number){
    this.checkIsMobile();
    var height;
    var top;
    if(this.mobile == box){
      this.mobile = 0;
      if(window.screen.width > 768){
        //console.log('window.screen.width' + window.screen.width);
        window.scrollTo(0,0);
      }
      
    }else{
      height = this.element.getBoundingClientRect().top;
      this.mobile = box;
      if(window.screen.width > 768){
        //console.log('window.screen.width' + window.screen.width);
        window.scrollTo(0,this.getCurrentOffsetTop(height));
      }
      
    }
  }
  ngOnChanges(){
    this.checkIsMobile();
  }
  getCurrentOffsetTop(element:number){
    return (element + window.pageYOffset - document.documentElement.clientTop);   //get move to position
  }
}
