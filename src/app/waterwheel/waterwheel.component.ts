import { Component } from '@angular/core';
@Component({
  selector: 'app-waterwheel',
  templateUrl: './waterwheel.component.html',
  styleUrls: ['./waterwheel.component.css']
})
export class WaterwheelComponent {
  configs = {
    loop: true,
    margin: 1,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2500,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }

  };

}

