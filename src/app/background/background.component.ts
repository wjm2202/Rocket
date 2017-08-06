import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class BackgroundComponent implements OnInit {
  mobile:number = 5;
  width: any;
  ismobile:boolean;
  onResize(event){
    if(event.target.innerWidth <= 768){
      this.ismobile = true;
    }
    if(event.target.innerWidth > 768){
      this.ismobile = false;
    }
  }
  constructor() {
    this.width = window.screen.width;
    if(this.width<768){
      this.ismobile = true;
    }else{
      this.ismobile = false;
    }
   }

  open(box:number){
    this.mobile = box;
  }
  ngOnInit() {

  }

}
