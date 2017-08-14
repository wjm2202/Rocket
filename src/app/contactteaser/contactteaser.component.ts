import { Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';
import { routerTransition } from '../animations/fadeInAnimation';
import { fade } from '../animations/fade';

@Component({
  selector: 'app-contactteaser',
  templateUrl: './contactteaser.component.html',
  styleUrls: ['./contactteaser.component.css'],
  animations: [fade]
})

export class ContactteaserComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    
  }

}
