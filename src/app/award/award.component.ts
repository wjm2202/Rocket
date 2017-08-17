import { Component, OnInit, Input } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UrlStrip } from '../pipes/imagestrip';

@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.css'],
  providers:[UrlStrip]
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
