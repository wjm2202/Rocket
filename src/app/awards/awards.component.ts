import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { UrlStrip } from '../pipes/imagestrip';
import { AppendAssetsPipe } from '../pipes/append-assets.pipe';
import { AppendSponsorPipe } from '../pipes/append-sponsor.pipe';
import { GetawardsService } from '../services/getawards.service';
import { AwardModel } from '../interfaces/awardcard';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css'],
  providers: [GetawardsService]
})
export class AwardsComponent implements OnInit {
  awards: AwardModel[];
  header:string ='card-header-300px.jpg';
  constructor(private http: HttpClient,
              private AllAwards :GetawardsService,
              private router: Router) { 
  
  }
    
  getAwards(): void {
    this.AllAwards.getAllAwards()
    .subscribe(resultArray => this.awards = resultArray,
    error => console.log("Error :: "+ error)
   )
  }
  

  ngOnInit() {
    this.getAwards();                      //for live api
    //this.awards = this.AWARDS;               //for testing
  }
  AWARDS = [
    {'AwardBlurb':'best best','AwardDate':'best best','AwardDegree':'best best',
    'AwardDegreeLevel':'best best','AwardId':1,'AwardIsVisable':true,'AwardMajor':'Software','AwardName':'best best','SponsorLink':'best best',
    'SponsorLogo':'best best','SponsorName':'best best','StudentName':'best best',
    'AwardSponsorBlurb':'best best','NeedsSponsor':true},
    {'AwardBlurb':'best best','AwardDate':'best best','AwardDegree':'best best',
    'AwardDegreeLevel':'best best','AwardId':1,'AwardIsVisable':true,'AwardMajor':'Software','AwardName':'best best','SponsorLink':'best best',
    'SponsorLogo':'best best','SponsorName':'best best','StudentName':'best best',
    'AwardSponsorBlurb':'best best','NeedsSponsor':true},
    {'AwardBlurb':'best best','AwardDate':'best best','AwardDegree':'best best',
    'AwardDegreeLevel':'best best','AwardId':1,'AwardIsVisable':true,'AwardMajor':'Software','AwardName':'best best','SponsorLink':'best best',
    'SponsorLogo':'best best','SponsorName':'best best','StudentName':'best best',
    'AwardSponsorBlurb':'best best','NeedsSponsor':true},
    {'AwardBlurb':'best best','AwardDate':'best best','AwardDegree':'best best',
    'AwardDegreeLevel':'best best','AwardId':1,'AwardIsVisable':true,'AwardMajor':'Software','AwardName':'best best','SponsorLink':'best best',
    'SponsorLogo':'best best','SponsorName':'best best','StudentName':'best best',
    'AwardSponsorBlurb':'best best','NeedsSponsor':true},
    {'AwardBlurb':'best best','AwardDate':'best best','AwardDegree':'best best',
    'AwardDegreeLevel':'best best','AwardId':1,'AwardIsVisable':true,'AwardMajor':'Software','AwardName':'best best','SponsorLink':'best best',
    'SponsorLogo':'best best','SponsorName':'best best','StudentName':'best best',
    'AwardSponsorBlurb':'best best','NeedsSponsor':true},
    {'AwardBlurb':'best best','AwardDate':'best best','AwardDegree':'best best',
    'AwardDegreeLevel':'best best','AwardId':1,'AwardIsVisable':true,'AwardMajor':'Software','AwardName':'best best','SponsorLink':'best best',
    'SponsorLogo':'best best','SponsorName':'best best','StudentName':'best best',
    'AwardSponsorBlurb':'best best','NeedsSponsor':true}
  ];
}
