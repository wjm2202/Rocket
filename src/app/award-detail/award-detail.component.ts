import { Component, OnInit } from '@angular/core';
import { AwardsSearchService } from '../services/awards-search.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-award-detail',
  templateUrl: './award-detail.component.html',
  styleUrls: ['./award-detail.component.css']
})
export class AwardDetailComponent implements OnInit {
  award:any;
  constructor(private awardsSearchSearch: AwardsSearchService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.award = this.awardsSearchSearch.getAward(
      +this.route.snapshot.params['id']
    );
  }
  back(){
    this.location.back();
  }
}
