import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { AnimatedhamburgerComponent } from '../animatedhamburger/animatedhamburger.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() mobile = new EventEmitter();
  
  constructor() { 

  }
  onboxChange(box:number){
    this.mobile.emit(box);
  }

  ngOnInit() {
  }

}
