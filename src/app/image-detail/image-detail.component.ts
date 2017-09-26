import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ImageService } from '../services/Image.Service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { animatePic} from '../animations/pic-slideAnimation';
import { trigger, state, style, animate, transition, query, stagger,keyframes } from '@angular/animations';
import { environment } from '../../environments/environment';
 

interface PhotoModel {
  Created: number;
  Filename: string;
  PhotoID: number;
}

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css'],
  animations:[animatePic,
    trigger('picstate', [
      state('off', style({
        //opacity: '0',
        transform: 'translate(-50%)'
      })),
      state('on', style({
        //opacity: '1',
        transform: 'translate(0)'
      })),
      transition('off => on', animate('350ms ease-in-out', keyframes([
        style({transform: 'translate(-50%)'}),
        style({transform: 'translate(-40%)'}),
        style({transform: 'translate(-30%)'}),
        style({transform: 'translate(-20%)'}),
        style({transform: 'translate(-15%)'}),
        style({transform: 'translate(-10%)'}),
        style({transform: 'translate(-5%)'}),
        style({transform: 'translate(0%)'}),
      ]))),
      transition('on => off', animate('350ms ease-in-out', keyframes([
        style({transform: 'translate(0%)', opacity: '1'}),
        style({transform: 'translate(5%)', opacity: '0.9'}),
        style({transform: 'translate(10%)', opacity: '0.8'}),
        style({transform: 'translate(15%)', opacity: '0.7'}),
        style({transform: 'translate(20%)', opacity: '0.6'}),
        style({transform: 'translate(30%)', opacity: '0.5'}),
        style({transform: 'translate(40%)', opacity: '0.25'}),
        style({transform: 'translate(50%)', opacity: '0'}),
      ])))
    ])
  ]
})
export class ImageDetailComponent implements OnInit, OnDestroy {
  images: PhotoModel;
  id: number;
  Created;
  FileName;
  PhotoID;
  yearPhotos:any[];
  index:number = 0;
  loaded:boolean = false;
  picstate: string = 'on';
  value:number = 1;
  first:boolean = true;
  direction:boolean = false;
  isPlaying:boolean = false;
  playStopMessage:string = 'Play';
  timerOn:boolean = false;
  private subscription;
  constructor(private httpClient: HttpClient,
    private route: ActivatedRoute,
    private location: Location) {

    this.id = +this.route.snapshot.params['id'];
    this.getImages();
  }
  togglePlaying(data){
    this.isPlaying = data;
    if(this.isPlaying){
      this.startSlideShow();
      this.playStopMessage = 'Stop';
    }else{
      this.stopSlideShow();
      this.playStopMessage = 'Play';
    }
  }
  slideShow(){
    if(this.isPlaying){                               //is this playing
      if(this.direction){                             //index increasing
        if (this.index < this.yearPhotos.length -1){  // if can go higher
          this.toggle();                              //get next photo
        }else{
          this.direction = !this.direction; //change direction
          this.toggle();
        }
      }else if(!this.direction){                     //index decreasing
        if (this.index >= 1){                        //if can go lower
          this.toggle();                             //get previous photo
        }else{
          this.direction = !this.direction; //change direction
          this.toggle();
        }
      }
    }else{
      //not playing
    }
  }
  startSlideShow(){
      let timer = Observable.timer(3000, 4000);
      this.subscription = timer.subscribe(t=>{
        if(this.isPlaying){
          this.slideShow();
         // console.log('timer subscribe'+t);
        }
      });
  }
  stopSlideShow(){
    if(this.subscription != null){
      this.subscription.unsubscribe();
      this.isPlaying = false;
      //console.log('timer unsubscribed');
    }
  }
  changeIndex(){
    if (!this.first){
      //console.log('index before : '+this.index);
      //console.log('direction: is up '+this.direction);
      if(this.direction){
        if (this.index < this.yearPhotos.length -1){
          this.index = (this.index += this.value);
        }
      }else if (!this.direction){
        if(this.index >= 1){
          this.index = (this.index -= this.value);
        }
      }
     // console.log('index after : '+this.index);
      this.first = true;
    }else{
      this.first = false;
    }
    this.picOn();
  }
  picOn(){
    this.picstate = 'on';
  }
  picOff(){
    this.picstate = 'off';
  }
  toggle(){
    if((this.index != 0 && this.direction == false)||(this.index < this.yearPhotos.length -1 && this.direction == true)){
      if (this.picstate == 'on'){
        this.picstate = 'off';
      }else {
        this.picstate = 'on';
      }
    }
  }
  back() {
    this.location.back();
  }
  indexUp(){
    this.direction = true;
    if(this.isPlaying == true){
      this.isPlaying = false;
      this.stopSlideShow();
      this.playStopMessage = 'Play';
    }
    this.toggle();
  }
  indexDown(){
    this.direction = false;
    if(this.isPlaying == true){
      this.isPlaying = false;
      this.stopSlideShow();
      this.playStopMessage = 'Play';
    }
    this.toggle();
  }
  ngOnInit() {
    
  }
  ngOnDestroy(){
    if(this.subscription != null){
      this.subscription.unsubscribe();
    }
  }
  getImages() {
    this.httpClient.get<PhotoModel[]>(environment.baseURI+'photos/getyear/' + this.id).subscribe
      (data => {
        this.yearPhotos = data;
        //console.log(this.yearPhotos);
        this.loaded = true;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side Error Occured");
        } else {
          console.log("Server-side error occured here");
        }
      }
      )
  }
}