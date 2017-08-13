import { Component, OnInit, Input } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.css']
})
export class AwardComponent implements OnInit {
  element;
  isFlipped:boolean = false;
  @Input() award;
  constructor() { }

  cardFlip(){
    //console.log('flipped clicked');
    this.isFlipped = !this.isFlipped;
    //console.log("flipped");
  }
  ngOnInit() {
  }

}
