import { Component, OnInit } from '@angular/core';
import { ElementRef, Renderer, Input, Output, Optional, EventEmitter, ViewEncapsulation } from '@angular/core';
import { printSlide } from '../pipes/safe-html-pipe.pipe';

@Component({
  selector: 'app-event-slider',
  templateUrl: './event-slider.component.html',
  styleUrls: ['./event-slider.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class EventSliderComponent {
    currentElement:number = 0;                             //element being displayed
    autoPlay = false;                                      //autoplay or not
    number:number=0;                                       //number of slides
    //lis:number = 0;                                      //?????????
    intervalTime:number = 1000;//in ms(mili seconds)       //between slides
    private delayHideSetTimeOutControl:any;                //?????????
   /**
     * Play Interval
     */
    @Input('playInterval') interval:any = 4000;            //input delay of slide
    slides:any;
    
    @Input("slides") set _slides(s){
        this.slides = s;
        this.number = this.slides.length;
        if(this.slides.length)
          this.slides[0]["classes"] = ["active"];
    }

    @Input('autoPlay') set _autoPlay(b:boolean){
        this.autoPlay = b
        if(b){
            this.auto(this.interval);
        }
    }

    constructor(){
        //this.slideShow=document.getElementById("slideShow");

        //this.lis = this.slides.length;

        //this.number=this.lis.length;
    }
    backWard(){
        if(this.autoPlay)
            clearInterval(this.interval);
        this.currentElement=this.currentElement-1;
        if(this.currentElement<0){
            this.currentElement=this.number-1;
        }
        this.removeClasses();
        var prev=this.currentElement==this.number-1?0:this.currentElement+1;
        //this.lis[prev].classList.add("animateForward");
        this.slides[prev].classes = ["animateForward"];
        this.show(this.slides[prev]);
        this.show(this.slides[this.currentElement]);

        clearTimeout(this.delayHideSetTimeOutControl);

        this.delayHideSetTimeOutControl=this.delayHide(this.slides[prev],1100);
        //this.lis[this.currentElement].classList.add("active");
        this.slides[this.currentElement].classes = ["active","backward"];
        //this.lis[this.currentElement].classList.add("backward");
        if(this.autoPlay)this.auto(this.intervalTime);
    }

    removeClasses(){
        for(var i=0;i<this.number;i++){
            this.slides[i].classes = {}
        }
    }
    forWard(){
        console.log("forward called")
        if(this.autoPlay)clearInterval(this.interval);
        this._forWard();
        if(this.autoPlay)this.auto(this.intervalTime);        
    }
    private _forWard(){
        this.currentElement=1+this.currentElement;
        //this.lis=this.slideShow.childNodes;
        if(this.currentElement>=this.number){
            this.currentElement=0;
        }
        this.removeClasses();
        var prev=this.currentElement==0?this.number-1:this.currentElement-1;
        //this.lis[prev].classList.add("animateBack");
        this.slides[prev]["classes"] = ["animateBack"];

        this.show(this.slides[prev]);
        this.show(this.slides[this.currentElement]);

        clearTimeout(this.delayHideSetTimeOutControl);
        this.delayHideSetTimeOutControl=this.delayHide(this.slides[prev],1100);
        //this.lis[this.currentElement].classList.add("active");
        //this.lis[this.currentElement].classList.add("forward");
        this.slides[this.currentElement].classes = ["active","forward"];
    }
    auto(ms){
        this.autoPlay=true;
        this.intervalTime=ms;
        this.interval=setInterval(this._forWard.bind(this),ms);
    }
    delayHide(el,ms){
        return setTimeout(()=> el.hidden = true,ms);
    }
    show(el){
        el.hidden = false;
    }
    hide(el){
      el.hidden = true;
    }



}
