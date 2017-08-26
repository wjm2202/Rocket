import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { UrlStrip } from '../pipes/imagestrip';
import { GetawardsService } from '../services/getawards.service';
import { AwardModel } from '../interfaces/awardcard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css'],
  providers: [GetawardsService]
})
export class AwardsComponent implements OnInit {
  awards: AwardModel[];
  isFlipped:boolean = false;
  constructor(private http: HttpClient,
              private AllAwards :GetawardsService,
              private router: Router) { 
  
  }
  cardFlip(){
    console.log('flipped clicked');
    this.isFlipped = !this.isFlipped;
    //console.log("flipped");
  }
    
  getAwards(): void {
    this.AllAwards.getAllAwards()
    .subscribe(resultArray => this.awards = resultArray,
    error => console.log("Error :: "+ error)
   )
  }
  

  ngOnInit() {
    //this.getAwards();
    this.awards = this.AWARDS;
  }
  AWARDS = [
    {'AwardBlurb':'best best','AwardDate':'best best','AwardDegree':'best best',
    'AwardDegreeLevel':'best best','AwardId':1,'AwardName':'best best','SponsorLink':'best best',
    'SponsorLogo':'best best','SponsorName':'best best','StudentName':'best best',
    'AwardSponsorBlurb':'best best','NeedsSponsor':true},
    {'AwardBlurb':'best best','AwardDate':'best best','AwardDegree':'best best',
    'AwardDegreeLevel':'best best','AwardId':2,'AwardName':'best best','SponsorLink':'best best',
    'SponsorLogo':'best best','SponsorName':'best best','StudentName':'best best',
    'AwardSponsorBlurb':'best best','NeedsSponsor':true},
    {'AwardBlurb':'best best','AwardDate':'best best','AwardDegree':'best best',
    'AwardDegreeLevel':'best best','AwardId':3,'AwardName':'best best','SponsorLink':'best best',
    'SponsorLogo':'best best','SponsorName':'best best','StudentName':'best best',
    'AwardSponsorBlurb':'best best','NeedsSponsor':true},
    {'AwardBlurb':'best best','AwardDate':'best best','AwardDegree':'best best',
    'AwardDegreeLevel':'best best','AwardId':4,'AwardName':'best best','SponsorLink':'best best',
    'SponsorLogo':'best best','SponsorName':'best best','StudentName':'best best',
    'AwardSponsorBlurb':'best best','NeedsSponsor':true},
    {'AwardBlurb':'best best','AwardDate':'best best','AwardDegree':'best best',
    'AwardDegreeLevel':'best best','AwardId':5,'AwardName':'best best','SponsorLink':'best best',
    'SponsorLogo':'best best','SponsorName':'best best','StudentName':'best best',
    'AwardSponsorBlurb':'best best','NeedsSponsor':true}
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