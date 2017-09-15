import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/Image.Service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

interface PhotoModel {
  Created: Date;
  Filename: string;
  PhotoID: number;
}

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
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
  constructor(private httpClient: HttpClient,
    private route: ActivatedRoute,
    private location: Location) {

    this.id = +this.route.snapshot.params['id'];
    //console.log('in constructor ' + this.id);
    this.getImages();
  }
  back() {
    this.location.back();
  }

  indexUp(){
    if (this.index < this.yearPhotos.length -1){
      this.index++;
    }
  }
  indexDown(){
    if(this.index >= 1){
      this.index--;
    }
  }
  ngOnInit() {
    //console.log("in init the value of id: " + this.id);
  }

  getImages() {
    console.log('https://webservices-test.aut.ac.nz/ecms/api/photos/getyear/' + this.id);
    this.httpClient.get<PhotoModel[]>('https://webservices-test.aut.ac.nz/ecms/api/photos/getyear/' + this.id).subscribe
      (data => {
        //console.log('http://ecms-award.aut.ac.nz/web/generalphotos/' + data.Filename);
        //this.images = data;
       // this.Created = data.Created;
        //this.FileName = data.Filename;
        //this.PhotoID = data.PhotoID;
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

}