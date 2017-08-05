import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-carousel',
  templateUrl: './event-carousel.component.html',
  styleUrls: ['./event-carousel.component.css']
})
export class EventCarouselComponent implements OnInit {
  items: Array<any> = [];
  constructor() { 
        this.items = [
      { name: 'assets/images/i1ec.jpg' },
      { name: 'assets/images/i2ec.jpg' },
      { name: 'assets/images/i3ec.jpg' },
      { name: 'assets/images/i4ec.jpg' },
      { name: 'assets/images/i5ec.jpg' },
      { name: 'assets/images/i6ec.jpg' },
    ]
  }
  
  ngOnInit() {
  }

}
