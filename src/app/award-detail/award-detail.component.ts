import { Component, OnInit } from '@angular/core';
import { AwardsSearchService } from '../services/awards-search.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GetawardsService } from '../services/getawards.service';
import { AwardModel } from '../interfaces/awardcard';
import { Http } from '@angular/http';

@Component({
  selector: 'app-award-detail',
  templateUrl: './award-detail.component.html',
  styleUrls: ['./award-detail.component.css'],
  providers: [GetawardsService]
})
export class AwardDetailComponent implements OnInit {
  award:AwardModel;
  constructor(private awardsSearchSearch: GetawardsService,
              private route: ActivatedRoute,
              private location: Location,
              private http: Http) { }

  getSingleAward(){
    //this.http.get('https://webservices-test.aut.ac.nz/ecms/api/awards/'+id)
  }

  ngOnInit() {
    this.getAwards();
    console.log('values of award model '+this.award.awardDegree);
  }
  back(){
    this.location.back();
  }
  getAwards(): void {
    this.awardsSearchSearch.getAward(+this.route.snapshot.params['id'])
    .subscribe(resultArray => this.award = resultArray,
    error => console.log("Error :: "+ error)
   )
  }
}
