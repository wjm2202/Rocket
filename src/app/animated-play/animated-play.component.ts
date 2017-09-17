import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animated-play',
  templateUrl: './animated-play.component.html',
  styleUrls: ['./animated-play.component.css']
})
export class AnimatedPlayComponent implements OnInit {

  isPlaying:boolean = false;
  func = 'stop';
  constructor() { }

  ngOnInit() {
  }
  toggle(){
    this.isPlaying = !this.isPlaying;
    if(this.func == 'play'){
      this.func = 'stop';
    }else {
      this.func = 'play';
    }
  }
}
