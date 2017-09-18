import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-animated-play',
  templateUrl: './animated-play.component.html',
  styleUrls: ['./animated-play.component.css']
})
export class AnimatedPlayComponent implements OnInit {
  @Input() public isPlaying:boolean;
  @Output() event: EventEmitter<boolean> = new EventEmitter();
  constructor() {}
  ngOnInit() {
  }
  toggle(){
    this.isPlaying = !this.isPlaying;
    this.event.emit(this.isPlaying);
  }
}
