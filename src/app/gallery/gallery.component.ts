import { ImageService } from '../services/Image.Service';
import { Component, OnChanges, Input, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { Observable } from 'rxjs/Rx';
import { getSponsorCaraService } from '../services/getSponsorCara.service';

interface PhotoModel {
  Created: Date;
  Filename: string;
  PhotoID: number;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [ImageService]
})
export class GalleryComponent implements OnChanges, OnInit {
  pictures: PhotoModel;
  title = 'ECMS Photos';
  @Input() filterBy?: string = 'all';     //? is optional
  visableImages: any[] = [];
  //Onchanges is a life cycle hook called when something changes
  constructor(private imageService: ImageService, private httpClient: HttpClient) {
    this.visableImages = this.imageService.getImages();
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
    this.httpClient.get<PhotoModel>('https://webservices-test.aut.ac.nz/ecms/api/photos').subscribe(data => {
      this.pictures = data;
      //console.log("Created: " + this.pictures[0].Created);
      //console.log("FileName: " + this.pictures[0].Filename);
      //console.log("PhotoID: " + this.pictures[0].PhotoID);
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

