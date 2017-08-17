import { Component, OnInit } from '@angular/core';
import { Image } from '../interfaces/image';
import { NgFor } from '@angular/common';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { GetMainCaraService } from '../services/getMainCara.service';
import { UrlStrip } from '../pipes/imagestrip';


interface MainCarosouelModel{
  Link:string;
}


@Component({
  selector: 'app-fullwidth',
  templateUrl: './fullwidth.component.html',
  styleUrls: ['./fullwidth.component.css'],
  providers: [GetMainCaraService]
})
export class FullwidthComponent implements OnInit {
  
  cara:Element;
  pictures:MainCarosouelModel[];

  constructor(private getPicsService:GetMainCaraService ) { }

  getpics(){
    this.getPicsService.getAllMainCaraPics()
    .subscribe(res => this.pictures = res,
    error => console.log("Error :: "+ error))
  }
  ngOnInit() {
    this.getpics();

  }

}
