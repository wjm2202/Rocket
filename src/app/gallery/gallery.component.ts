import { ImageService } from '../services/Image.Service';
import { Component, OnChanges, Input, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { Observable } from 'rxjs/Rx';
import { getSponsorCaraService } from '../services/getSponsorCara.service';

interface PhotoModel {
  PhotoID: string;
  PhotoLink: string;
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
    this.httpClient.get<PhotoModel>('https://webservices-test.aut.ac.nz/ecms/api/photos').subscribe(data => {
      this.pictures = data;
      console.log(this.pictures[0].PhotoID);
      console.log(this.pictures[0].PhotoLink);
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
