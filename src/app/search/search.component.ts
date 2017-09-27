import { Component, OnChanges, Input, OnInit } from '@angular/core';
import { AwardsSearchService } from '../services/awards-search.service';
import { AwardModel } from '../interfaces/awardcard';
import { GetawardsService } from '../services/getawards.service';
import { fade } from '../animations/fade';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [GetawardsService],
  animations:[fade]
})
export class SearchComponent implements OnChanges, OnInit {
  title = 'Search Awards';
  @Input() filterBy?: string = 'all';
  visableAwards: AwardModel[];
  awards: AwardModel[];
  wordSearch:boolean = true;
  filterSearch:boolean = false;
  hideCards:boolean = false;
  constructor(private AllAwards: GetawardsService) {

  }

  ngOnInit(){

    this.getAwards();                          //for live api
    //this.visableAwards = this.AWARDS1;           //for offline testing
  }
  ngOnChanges() {

  }

  openSearch(){
    if(this.filterSearch == true){
      this.filterSearch = false;
    }
    this.wordSearch = !this.wordSearch;
    this.hideCards = false;
  }
  openFilter(){
    if(this.wordSearch == true){
      this.wordSearch = false;
    }
    this.filterSearch = !this.filterSearch;
    this.hideCards = true;
  }

  getAwards(): void {
    this.AllAwards.getAllAwards()
      .subscribe(resultArray => this.visableAwards = resultArray,
      error => console.log("Error :: " + error)
      )
  }
}
