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

    if(this.selectedIdx != -1){
      this.selectedIdx = -1;
    }else{
      this.selectedIdx = pic;
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


