import { Component, OnInit, ViewChildren, HostListener } from '@angular/core';
import { trigger, animate, animation, state, style, group, animateChild, query, stagger, transition } from '@angular/animations';

import {Observable} from 'rxjs/Rx';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-three-d',
  templateUrl: './three-d.component.html',
  styleUrls: ['./three-d.component.css'],
  animations: [
    
  ]
})
export class ThreeDComponent implements OnInit {
  rotater = 0;
  ticks = 0;
  offset = 1;
  increment =0;
  pannelSize:number = 315;
  numberOfPanels:number = 9;
  autorotate:boolean = true;
  tz = Math.round( ( this.pannelSize / 2 ) / Math.tan( Math.PI / this.numberOfPanels  ) );            
  theta = 360 / this.numberOfPanels;
  radius = Math.round( ( this.pannelSize / 2) / Math.tan( Math.PI / this.numberOfPanels ) );
  rotation = Math.round( this.tz / this.theta ) * this.theta;
  blip;
  start =0;
  delta =0;
  private event:MouseEvent;
  private clientX = 0;
  private clientY = 0;
  private rotationOffset =0;
  constructor(private sanitizer: DomSanitizer) {
    
  }
  stopswivel(){
    this.autorotate = false;
    this.start = 0;
  }
  startswivel(){
    this.autorotate = true;
  }
  onmouse(event:MouseEvent){
    this.start = event.clientX;
  }
  offmouse(){
    this.start =0;
  }

  coordinates(event:MouseEvent){
    this.clientX = event.clientX;
    if(!this.autorotate){
      this.delta = this.start - event.clientX;
      if(this.delta > 75){
        this.rotation -= 40;
        this.blip = document.getElementById('carousel');
        this.blip.style.transform = 'translateZ( -433px ) rotateY( '+this.rotation+'deg )';
        this.start = event.clientX;
      }
      if(this.delta < -75){
        this.rotation += 40;
        this.blip = document.getElementById('carousel');
        this.blip.style.transform = 'translateZ( -433px ) rotateY( '+this.rotation+'deg )';
        this.start = event.clientX;
      }
    }

  }

  public onRotate(){
    if(this.autorotate){
      this.rotation += 40;
      this.blip = document.getElementById('carousel');
      this.blip.style.transform = 'translateZ( -433px ) rotateY( '+this.rotation+'deg )';
    }
  }
  ngOnInit() {
    let timer = Observable.timer(2000,3000);
    timer.subscribe(t=> {
      if(this.autorotate){
        this.onRotate();
      }
    });
  }
}
