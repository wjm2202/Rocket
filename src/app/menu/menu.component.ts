import { Component, OnInit,Output,Input, EventEmitter,OnChanges } from '@angular/core';
import { AnimatedhamburgerComponent } from '../animatedhamburger/animatedhamburger.component';
import { teaser, heightdown, heightup } from '../animations/teaserDownUp';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [heightdown, heightup],
  providers: [ DatePipe]
})
export class MenuComponent implements OnInit, OnChanges {
  @Output() mobile = new EventEmitter();
  morf:boolean = false;
  isopen:boolean = false;
  width:number; 
  current;
  @Input() ismobile:boolean;
  constructor(private datePipe:DatePipe) { 
    this.width = window.screen.width;
    this.current = Date.now();
    this.current = this.datePipe.transform(this.current, 'yyyy');
  }
  onboxChange(box:number){
    this.mobile.emit(box);
    this.ismobile = true;
  }
  toggleBurger(){
    this.morf = !this.morf;
    this.isopen = !this.isopen;
  }
  ngOnInit() {
  }
  ngOnChanges(){
    this.width = window.screen.width;
    if(this.width > 768){
      this.isopen = false;
      this.morf = false;
    }
  }
}
