import { Component, OnInit } from '@angular/core';
import { Image } from '../interfaces/image';
import { NgFor } from '@angular/common';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { GetMainCaraService } from '../services/getMainCara.service';
import { UrlStrip } from '../pipes/imagestrip';
import { AppendMaincaraPipe } from '../pipes/append-maincara.pipe';
import { HttpErrorResponse } from "@angular/common/http";


interface MainCarosouelModel {
  Link: string;
}


@Component({
  selector: 'app-fullwidth',
  templateUrl: './fullwidth.component.html',
  styleUrls: ['./fullwidth.component.css']
})
export class FullwidthComponent implements OnInit {

  cara: Element;
  pictures: MainCarosouelModel;

  constructor(private httpclient: HttpClient) { }

  ngOnInit() {
    this.getImages;
  }

  getImages() {
    this.httpclient.get<MainCarosouelModel>('https://webservices-test.aut.ac.nz/ecms/api/maincarosouel').subscribe(
      data => {
        this.pictures = data;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side Error');
        } else {
          console.log('Server-side Error');
        }
      }
    )
  }

}
