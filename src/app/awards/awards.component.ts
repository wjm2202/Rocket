import { Component, OnInit } from '@angular/core';
//import { AwardModel } from '../interfaces/awardcard';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { UrlStrip } from '../pipes/imagestrip';
import { GetawardsService } from '../services/getawards.service';

interface AwardModel {
  AwardBlurb:string;
  AwardDate:string;
  AwardFaculty:string;
  AwardId:number;
  AwardName:string;
  SponsorBlurb:string;
  SponsorLink:string;
  SponsorLogo:string;
  SponsorName:string;
  StudentName:string;
}

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
                this.awards = this.AWARD;
  }
  getAwards(): void {
    this.AllAwards.getAllAwards()
    .subscribe(resultArray => this.awards = resultArray,
    error => console.log("Error :: "+ error)
   )
  }
  

  ngOnInit() {
    this.getAwards();
  }
  AWARD: AwardModel[] = [
  {
    "AwardBlurb": "This is the message about the award from AUT explaining the This is the message about the award from AUT explaining the reason the award was given",
    "AwardDate": "2017",
    "AwardFaculty":  "Computer Sciences",
    "AwardId": 1,
    "AwardName": "Best front end coder",
    "SponsorBlurb": "A leading Australasian drinks company and the market leader in energy drinks in Australia and New Zealand",
    "SponsorLink": "https://aut.ac.nz",
    "SponsorLogo": "../../assets/imamges/frucor.jpg",
    "SponsorName": "Frucour Beverages",
    "StudentName": "Jayce cho"
  },
  {
    "AwardBlurb": "This is the message about the award from AUT explaining the reason the award was given",
    "AwardDate": "2017",
    "AwardFaculty":  "Mathmatical Sciences",
    "AwardId": 1,
    "AwardName": "Best Equation",
    "SponsorBlurb": "We math the math stuff",
    "SponsorLink": "https://aut.ac.nz",
    "SponsorLogo": "../../assets/imamges/frucor.jpg",
    "SponsorName": "AUT",
    "StudentName": "Samantha tutor"
  },
  {
    "AwardBlurb": "This is the message about the award from AUT explaining the reason the award was given",
    "AwardDate": "2017",
    "AwardFaculty":  "Computer Sciences",
    "AwardId": 1,
    "AwardName": "Best front end coder",
    "SponsorBlurb": "A leading New Zealand University",
    "SponsorLink": "https://aut.ac.nz",
    "SponsorLogo": "../../assets/imamges/frucor.jpg",
    "SponsorName": "AUT",
    "StudentName": "Jayce cho"
  },
    {
    "AwardBlurb": "This is the message about the award from AUT explaining the reason the award was given",
    "AwardDate": "2017",
    "AwardFaculty":  "Computer Sciences",
    "AwardId": 1,
    "AwardName": "Best front end coder",
    "SponsorBlurb": "A leading New Zealand University",
    "SponsorLink": "https://aut.ac.nz",
    "SponsorLogo": "../../assets/imamges/frucor.jpg",
    "SponsorName": "AUT",
    "StudentName": "Jayce cho"
  },
    {
    "AwardBlurb": "This is the message about the award from AUT explaining the reason the award was given",
    "AwardDate": "2017",
    "AwardFaculty":  "Computer Sciences",
    "AwardId": 1,
    "AwardName": "Best front end coder",
    "SponsorBlurb": "A leading New Zealand University",
    "SponsorLink": "https://aut.ac.nz",
    "SponsorLogo": "../../assets/imamges/frucor.jpg",
    "SponsorName": "AUT",
    "StudentName": "Jayce cho"
  }];
}
