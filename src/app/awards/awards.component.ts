import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { UrlStrip } from '../pipes/imagestrip';
import { GetawardsService } from '../services/getawards.service';
import { AwardModel } from '../interfaces/awardcard';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css'],
  providers: [GetawardsService]
})
export class AwardsComponent implements OnInit {
  awards: AwardModel[];
  constructor(private http: HttpClient,
              private AllAwards :GetawardsService) { 
                
  }
  getAwards(): void {
    this.AllAwards.getAllAwards()
    .subscribe(resultArray => this.awards = resultArray,
    error => console.log("Error :: "+ error)
   )
  }
  

  ngOnInit() {
    this.getAwards();
    //this.awards = this.AWARDS;
  }
  AWARDS = [
    {'awardBlub':'best best','awardDate':'best best','awardDegree':'best best',
    'awardDegreeLevel':'best best','awardId':1,'awardName':'best best','sponsorLink':'best best',
    'sponsorLogo':'best best','sponsorName':'best best','studentName':'best best','awardSponsorBlurb':'best best'},
    {'awardBlub':'best best','awardDate':'best best','awardDegree':'best best',
    'awardDegreeLevel':'best best','awardId':1,'awardName':'best best','sponsorLink':'best best',
    'sponsorLogo':'best best','sponsorName':'best best','studentName':'best best','awardSponsorBlurb':'best best'},
    {'awardBlub':'best best','awardDate':'best best','awardDegree':'best best',
    'awardDegreeLevel':'best best','awardId':1,'awardName':'best best','sponsorLink':'best best',
    'sponsorLogo':'best best','sponsorName':'best best','studentName':'best best','awardSponsorBlurb':'best best'},
    {'awardBlub':'best best','awardDate':'best best','awardDegree':'best best',
    'awardDegreeLevel':'best best','awardId':1,'awardName':'best best','sponsorLink':'best best',
    'sponsorLogo':'best best','sponsorName':'best best','studentName':'best best','awardSponsorBlurb':'best best'}
  ];
}

/**
 *      awardBlub: string;
  awardDate: string;
  awardDegree:string;
  awardDegreeLevel:string;
  awardId: number;
  awardName: string;
  sponsorLink: string;
  sponsorLogo: string;
  sponsorName: string;
  studentName: string;
  awardSponsorBlurb: string;
 * 
 */