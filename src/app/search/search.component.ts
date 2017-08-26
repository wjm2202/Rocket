import { Component, OnChanges, Input, OnInit } from '@angular/core';
import { AwardsSearchService } from '../services/awards-search.service';
import { AwardModel } from '../interfaces/awardcard';
import { GetawardsService } from '../services/getawards.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [GetawardsService]
})
export class SearchComponent implements OnChanges, OnInit {
  title = 'Search Awards';
  @Input() filterBy ?: string = 'all';
  visableAwards: AwardModel[];
  awards: AwardModel[];
  constructor(private AllAwards :GetawardsService) { 
    
  }
  ngOnInit(){
  //  this.getAwards();
    this.visableAwards = this.AWARDS1;
  }
  ngOnChanges() {
    
  }

  getAwards(): void {
    this.AllAwards.getAllAwards()
    .subscribe(resultArray => this.visableAwards = resultArray,
    error => console.log("Error :: "+ error)
   )
  }
  AWARDS1 = [
    {'AwardBlurb':'best best','AwardDate':'best best','AwardDegree':'best best',
    'AwardDegreeLevel':'best best','AwardId':1,'AwardName':'best best','SponsorLink':'best best',
    'SponsorLogo':'best best','SponsorName':'best best','StudentName':'best best',
    'AwardSponsorBlurb':'best best','NeedsSponsor':true},
  ];
}
