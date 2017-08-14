import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../animations/fadeInAnimation';
import { fade } from '../animations/fade';

@Component({
  selector: 'app-phototeaser',
  templateUrl: './phototeaser.component.html',
  styleUrls: ['./phototeaser.component.css'],
  animations: [fade]
})
export class PhototeaserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
