import { Component, OnInit } from '@angular/core';
import { fade } from '../animations/fade';
import { routerTransition } from '../animations/fadeInAnimation';

@Component({
  selector: 'app-sponsorsteaser',
  templateUrl: './sponsorsteaser.component.html',
  styleUrls: ['./sponsorsteaser.component.css'],
   animations: [fade]
})
export class SponsorsteaserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
