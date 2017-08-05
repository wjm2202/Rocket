import { Component, OnInit } from '@angular/core';
import { Image } from '../interfaces/image';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-fullwidth',
  templateUrl: './fullwidth.component.html',
  styleUrls: ['./fullwidth.component.css']
})
export class FullwidthComponent implements OnInit {
  pictures;
  constructor() { }

  ngOnInit() {
    this.pictures = this.IMAGES;
  }
    IMAGES: Image[] = [
  { "title": "Meeting the Students", "url": "../../assets/images/fair.jpg" },
  { "title": "Kick-Starter Weekend", "url": "../../assets/images/iso.jpg" },
  { "title": "Programming compitition", "url": "../../assets/images/kick.jpg" },
  { "title": "NZ and China", "url": "../../assets/images/progContest.jpg" }];
}
