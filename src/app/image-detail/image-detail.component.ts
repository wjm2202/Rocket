import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/Image.Service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { animatePic} from '../animations/pic-slideAnimation';
import { trigger, state, style, animate, transition, query, stagger,keyframes } from '@angular/animations';

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
        opacity: '0',
        //transform: 'translate(-50%)'
      })),
      state('on', style({
        opacity: '1',
        //transform: 'translate(0)'
      })),
      transition('off => on', animate('350ms linear', keyframes([
        style({transform: 'scale(0)'}),
        style({transform: 'scale(.5)'}),
        style({transform: 'scale(1.1)'}),
        style({transform: 'scale(1)'}),
      ]))),
      transition('on => off', animate('250ms linear', keyframes([
        style({transform: 'scale(1)'}),
        style({transform: 'scale(1.1)'}),
        style({transform: 'scale(.5)'}),
        style({transform: 'scale(0)'}),
      ])))
    ])
  ]
})
export class ImageDetailComponent implements OnInit {
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
  constructor(private httpClient: HttpClient,
    private route: ActivatedRoute,
    private location: Location) {

    this.id = +this.route.snapshot.params['id'];
    this.getImages();    //turn off for testing
    //this.yearPhotos = this.PICTURES;   //turn on for testing
    //this.loaded = true;                 //turn on for testing
    //console.log(this.yearPhotos);
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
    this.toggle();
  }
  indexDown(){
    this.direction = false;
    this.toggle();
  }
  ngOnInit() {
  }

  getImages() {
    this.httpClient.get<PhotoModel[]>('https://webservices-test.aut.ac.nz/ecms/api/photos/getyear/' + this.id).subscribe
      (data => {
        this.yearPhotos = data;
        console.log(this.yearPhotos);
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
  PICTURES = [
    {'Created': 2016,'Filename': '../../assets/images/1.jpg','PhotoID': 1},
    {'Created': 2016,'Filename': '../../assets/images/2.jpg','PhotoID': 2},
    {'Created': 2015,'Filename': '../../assets/images/3.jpg','PhotoID': 3},
    {'Created': 2015,'Filename': '../../assets/images/4.jpg','PhotoID': 4},
    {'Created': 2014,'Filename': '../../assets/images/5.jpg','PhotoID': 5},
    {'Created': 2014,'Filename': '../../assets/images/1.jpg','PhotoID': 6},
    {'Created': 2017,'Filename': '../../assets/images/1.jpg','PhotoID': 7},
    {'Created': 2017,'Filename': '../../assets/images/1.jpg','PhotoID': 8},
    {'Created': 2016,'Filename': '../../assets/images/1.jpg','PhotoID': 9},
    {'Created': 2016,'Filename': '../../assets/images/1.jpg','PhotoID': 10},
    {'Created': 2016,'Filename': '../../assets/images/1.jpg','PhotoID': 11},
    {'Created': 2016,'Filename': '../../assets/images/1.jpg','PhotoID': 12}
  ]
}