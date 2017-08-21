import { Component, OnChanges, Input } from '@angular/core';
import { AwardsSearchService } from '../services/awards-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnChanges {
  title = 'Search Awards';
  @Input() filterBy ?: string = 'all';
  visableAwards: any[] = [];
  constructor(private awardsSearchServcie: AwardsSearchService) { 
    this.visableAwards = this.awardsSearchServcie.getAwards();
  }

  ngOnChanges() {
    this.visableAwards = this.awardsSearchServcie.getAwards();
  }

}
