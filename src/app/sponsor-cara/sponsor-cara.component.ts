import { Component, OnInit } from '@angular/core';
import { Image } from '../interfaces/image';
import { NgFor } from '@angular/common';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { getSponsorCaraService } from '../services/getSponsorCara.service';
import { UrlStrip } from '../pipes/imagestrip';

interface sponCarouselModel {
  Link: string
}


@Component({
  selector: 'app-sponsor-cara',
  templateUrl: './sponsor-cara.component.html',
  styleUrls: ['./sponsor-cara.component.css'],
  providers: [getSponsorCaraService]
})
export class SponsorCaraComponent implements OnInit {
  cara: Element;
  pictures: sponCarouselModel[];

  constructor(private getPicsService: getSponsorCaraService) { }

  getpics() {
    this.getPicsService.getAllSponsorCaraPics()
      .subscribe(res => this.pictures = res,
      error => console.log("Error :: " + error))
  }
  ngOnInit() {
    this.getpics();

  }
}
