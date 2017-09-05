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
  constructor(private httpClient: HttpClient,
    private route: ActivatedRoute,
    private location: Location) {

    this.id = +this.route.snapshot.params['id'];
    console.log('in constructor ' + this.id);
  }
  back() {
    this.location.back();
  }
  ngOnInit() {
    console.log("in init the value of id: " + this.id);
    this.getImages();
  }

  getImages() {
    this.httpClient.get<PhotoModel>('https://webservices-test.aut.ac.nz/ecms/api/photos/' + this.id).subscribe
      (data => {
        console.log('http://ecms-award.aut.ac.nz/web/generalphotos/' + data.Filename);
        this.images = data;
        this.Created = data.Created;
        this.FileName = data.Filename;
        this.PhotoID = data.PhotoID;
        console.log(data);

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