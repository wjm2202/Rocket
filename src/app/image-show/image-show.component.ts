import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-image-show',
  templateUrl: './image-show.component.html',
  styleUrls: ['./image-show.component.css']
})
export class ImageShowComponent implements  AfterViewInit {
  images:Array<any>;
  constructor() { 
    this.images = [
    {"sType":"img","imgSrc":"../../assets/images/i1.jpg","hidden":false},
    {"sType":"img","imgSrc":"../../assets/images/i2.jpg","hidden":true},
    {"sType":"img","imgSrc":"../../assets/images/i3.jpg","hidden":true},
    {"sType":"img","imgSrc":"../../assets/images/i4.jpg","hidden":true},
    ];
  }
    ngAfterViewInit() {
      //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
      //Add 'implements AfterViewInit' to the class.
      
    }

}
