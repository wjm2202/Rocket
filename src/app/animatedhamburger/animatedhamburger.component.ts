import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-animatedhamburger',
  templateUrl: './animatedhamburger.component.html',
  styleUrls: ['./animatedhamburger.component.css']
})
export class AnimatedhamburgerComponent implements OnInit {
  @Input() morf:boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
