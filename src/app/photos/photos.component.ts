import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  title = 'Gallery Works';
  subtitle = 'Latest Photographs';
  constructor() { }

  ngOnInit() {
  }

}
