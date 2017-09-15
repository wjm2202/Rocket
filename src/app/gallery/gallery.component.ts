import { ImageService } from '../services/Image.Service';
import { Component, OnChanges, Input, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { Observable } from 'rxjs/Rx';
import { getSponsorCaraService } from '../services/getSponsorCara.service';
import { Moment } from 'moment'; 
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

interface PhotoModel {
  Created: Date;
  Filename: string;
  PhotoID: number;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [ImageService, DatePipe]
})
export class GalleryComponent implements OnChanges, OnInit {
  pictures: PhotoModel;
  title = 'ECMS Photos';
  @Input() filterBy?: string = 'all';     //? is optional
  visableImages: any[] = [];
  current;
  selected;
  id;
  //Onchanges is a life cycle hook called when something changes
  constructor(private imageService: ImageService, 
              private httpClient: HttpClient,
              private datePipe: DatePipe,
              private route: ActivatedRoute,) {
    //console.log('in gallery '+this.route.snapshot.params['id']);
    this.current = +this.route.snapshot.params['id'];
    //this.current = Date.now();
    ///this.current = this.datePipe.transform(this.current, 'yyyy');
    this.selected = this.current;
    this.visableImages = this.imageService.getImages();
    //this.current = +this.route.snapshot.params['id'];
  }

  upDate(){
    this.selected = parseInt(this.selected) + 1;
    this.getImages();
  }
  downDate(){
    this.selected = parseInt(this.selected) - 1;
    this.getImages();
  }
  ngOnChanges() {
    this.visableImages = this.imageService.getImages();
  }

  getpics() {
    this.imageService.getImagesHttp().subscribe(res => this.pictures = res,
      error => console.log("Error: " + error))
  }
  ngOnInit(): void {
    this.getImages();
    
  }
  getImages() {
    this.httpClient.get<PhotoModel>(`https://webservices-test.aut.ac.nz/ecms/api/photos/getyear/${this.selected}`).subscribe(data => {
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

