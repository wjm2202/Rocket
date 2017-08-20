import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navphoto',
  templateUrl: './navphoto.component.html',
  styleUrls: ['./navphoto.component.css']
})
export class NavphotoComponent implements OnInit {
  title = 'ECMS Photos';
  copy = 'Copy Right AUT';
  constructor() { }

  ngOnInit() {
  }

}
