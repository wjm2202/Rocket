import { Component, OnInit } from '@angular/core';
import { Image } from '../interfaces/image';
import { NgFor } from '@angular/common';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpResponse ,HttpErrorResponse } from '@angular/common/http';
import { getSponsorCaraService } from '../services/getSponsorCara.service';
import { PhotoPipe } from '../pipes/photo.pipe';

interface Spon_caraModel {
  Sponsor_carousel: string
}


@Component({
  selector: 'app-sponsor-cara',
  templateUrl: './sponsor-cara.component.html',
  styleUrls: ['./sponsor-cara.component.css'],
  providers: [getSponsorCaraService]
})
export class SponsorCaraComponent implements OnInit {
  cara: Element;
  pictures: Spon_caraModel;

  constructor(private getPicsService: getSponsorCaraService,
              private httpClient: HttpClient) { 
    
  }

  getpics() {
    this.getPicsService.getAllSponsorCaraPics()
      .subscribe(res => this.pictures = res,
      error => console.log("Error :: " + error))
  }
  ngOnInit(): void {
    //this.getpics();
    this.httpClient.get<Spon_caraModel>('https://webservices-test.aut.ac.nz/ecms/api/sponsorCarosouel').subscribe(data => {
      this.pictures = data;
    },
  (err: HttpErrorResponse) => {
    if(err.error instanceof Error){
      console.log('clientside error ');
    }else{
      console.log('serverside error ');
    }
  }
  )
  }
}
