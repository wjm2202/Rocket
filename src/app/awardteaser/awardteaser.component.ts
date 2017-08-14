import { Component, OnInit } from '@angular/core';
import { fade } from '../animations/fade';
import { routerTransition } from '../animations/fadeInAnimation';

@Component({
  selector: 'app-awardteaser',
  templateUrl: './awardteaser.component.html',
  styleUrls: ['./awardteaser.component.css'],
  animations: [fade]
})
export class AwardteaserComponent implements OnInit {
  isFlipped:boolean = false;
  constructor() { }
    cardFlip(){
    this.isFlipped = !this.isFlipped;
  }
  ngOnInit() {
  }

}
