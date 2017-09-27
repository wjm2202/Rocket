import { ImageService } from '../services/Image.Service';
import { Component, OnChanges, Input, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { Observable } from 'rxjs/Rx';
import { getSponsorCaraService } from '../services/getSponsorCara.service';
import { Moment } from 'moment'; 
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { DateService } from '../services/currentDate.service';
import { trigger,state,style,transition,animate,keyframes} from '@angular/animations';

interface PhotoModel {
  Created: number;
  Filename: string;
  PhotoID: number;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [ImageService, DatePipe],
  animations: [
    
            trigger('focusPanel', [
                state('inactive', style({
                    transform: 'scale(0.1)',
                    backgroundColor: 'transparent'
                })),
                state('active', style({
                    transform: 'scale(0.4)',
                    backgroundColor: '#000000'
                })),
                transition('inactive => active', animate('10ms ease-in')),
                transition('active => inactive', animate('10ms ease-out'))
            ]),
    
        ]
})
export class GalleryComponent implements OnChanges, OnInit {
  pictures: PhotoModel[];
  title = 'ECMS Photos';
  @Input() filterBy?: string = 'all';     //? is optional
  visableImages: any[] = [];
  current;
  selected;
  id;
  currentYear:number;
  selectedIdx = -1;
  selectedsize = -1;
  state: string = '';
  hidden:boolean = false;
  bigPic:string;
  lastScrollY;
  //Onchanges is a life cycle hook called when something changes
  constructor(private imageService: ImageService, 
              private httpClient: HttpClient,
              private datePipe: DatePipe,
              private route: ActivatedRoute,
              private dateService:DateService) {
    //console.log('in gallery '+this.route.snapshot.params['id']);
    this.current = +this.route.snapshot.params['id'];
    //this.current = Date.now();
    ///this.current = this.datePipe.transform(this.current, 'yyyy');
    this.selected = this.current;
    this.visableImages = this.imageService.getImages();
  }
  photoSize(pic:number){
    if(this.selectedIdx != -1){                      //if image already selected
      this.selectedIdx = -1;                         //remove center class
      this.hidden = false;                           //show the normal page
      window.scrollTo(0, this.lastScrollY);          //scroll to last know location prior to click
    }else{                                           //if image is selected
      this.selectedIdx = pic;                        //set the css to center
      this.hidden = true;                            //clear the background
      this.bigPic = this.pictures[pic].Filename;     //get the filename
      this.lastScrollY = window.pageYOffset;         //get the last Yoffset
      window.scrollTo(0,100);                        //scroll to below the menu
    }
    
  }

  upDate(){
    if(this.selected <= this.dateService.getDate()){
      console.log(this.dateService.getDate());
      this.selected = parseInt(this.selected) + 1;
      this.getImages();
    }else{
      console.log(this.dateService.getDate());
    }
  }
  downDate(){
    if(this.selected > 2014){
      this.selected = parseInt(this.selected) - 1;
      this.getImages();
    }
    
  }
  ngOnChanges() {
    this.visableImages = this.imageService.getImages();
  }

  getpics() {
    this.imageService.getImagesHttp().subscribe(res => this.pictures = res,
      error => console.log("Error: " + error))
  }
  ngOnInit(): void {
    this.getImages();                   // turn off for testing
  }
  getImages() {            //change to photomodel[] for testing
    this.httpClient.get<PhotoModel[]>(environment.baseURI+`photos/getyear/${this.selected}`).subscribe(data => {
      this.pictures = data;
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('clientside error ');
        } else {
          console.log('serverside error ');
        }
      }
    )
  }

}


