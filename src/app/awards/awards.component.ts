import { Component, OnInit } from '@angular/core';
import { AwardModel } from '../interfaces/awardcard';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { GetawardsService } from '../services/getawards.service';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
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
    //this.awards = this.AWARD;
  }
  AWARD: AwardModel[] = [
  {
    "awardBlub": "This is the message about the award from AUT explaining the This is the message about the award from AUT explaining the reason the award was given",
    "awardDate": "2017",
    "awardFaculty":  "Computer Sciences",
    "awardId": 1,
    "awardName": "Best front end coder",
    "sponsorBlurb": "A leading Australasian drinks company and the market leader in energy drinks in Australia and New Zealand",
    "sponsorId": 22,
    "sponsorLink": "https://aut.ac.nz",
    "sponsorLogo": "../../assets/imamges/frucor.jpg",
    "sponsorName": "Frucour Beverages",
    "studentMajor": "Software Development",
    "studentName": "Jayce cho"
  },
  {
    "awardBlub": "This is the message about the award from AUT explaining the reason the award was given",
    "awardDate": "2017",
    "awardFaculty":  "Mathmatical Sciences",
    "awardId": 1,
    "awardName": "Best Equation",
    "sponsorBlurb": "We math the math stuff",
    "sponsorId": 22,
    "sponsorLink": "https://aut.ac.nz",
    "sponsorLogo": "../../assets/imamges/frucor.jpg",
    "sponsorName": "AUT",
    "studentMajor": "Equation Development",
    "studentName": "Samantha tutor"
  },
  {
    "awardBlub": "This is the message about the award from AUT explaining the reason the award was given",
    "awardDate": "2017",
    "awardFaculty":  "Computer Sciences",
    "awardId": 1,
    "awardName": "Best front end coder",
    "sponsorBlurb": "A leading New Zealand University",
    "sponsorId": 22,
    "sponsorLink": "https://aut.ac.nz",
    "sponsorLogo": "../../assets/imamges/frucor.jpg",
    "sponsorName": "AUT",
    "studentMajor": "Software Development",
    "studentName": "Jayce cho"
  },
    {
    "awardBlub": "This is the message about the award from AUT explaining the reason the award was given",
    "awardDate": "2017",
    "awardFaculty":  "Computer Sciences",
    "awardId": 1,
    "awardName": "Best front end coder",
    "sponsorBlurb": "A leading New Zealand University",
    "sponsorId": 22,
    "sponsorLink": "https://aut.ac.nz",
    "sponsorLogo": "../../assets/imamges/frucor.jpg",
    "sponsorName": "AUT",
    "studentMajor": "Software Development",
    "studentName": "Jayce cho"
  },
    {
    "awardBlub": "This is the message about the award from AUT explaining the reason the award was given",
    "awardDate": "2017",
    "awardFaculty":  "Computer Sciences",
    "awardId": 1,
    "awardName": "Best front end coder",
    "sponsorBlurb": "A leading New Zealand University",
    "sponsorId": 22,
    "sponsorLink": "https://aut.ac.nz",
    "sponsorLogo": "../../assets/imamges/frucor.jpg",
    "sponsorName": "AUT",
    "studentMajor": "Software Development",
    "studentName": "Jayce cho"
  }];
}
