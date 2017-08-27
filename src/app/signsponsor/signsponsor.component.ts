import { Component, OnInit } from '@angular/core';
import { SponsorOpService } from '../services/SponsorOp.service';
import { UrlStrip } from '../pipes/imagestrip';
import {FormControl, FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-signsponsor',
  templateUrl: './signsponsor.component.html',
  styleUrls: ['./signsponsor.component.css'],
  providers: [SponsorOpService, UrlStrip]
})
export class SignsponsorComponent implements OnInit {
  title = 'Sign On As a Sponsor';
  potential: any[];  
  sponsorsFound: boolean = false;
  searching:boolean = false;
  searchQuery:string ='';
  Name:string = "";
  Email:string ='';
  Company:string = '';
  Phone:string = '';
  AwardId:string='';
  Selected;
  AwardInput:string='';

//api call success
  handleSuccess(data){
    this.sponsorsFound = true;
    this.potential = data;
    console.log(data);
  }
  //api call failed
  handleError(error){
    console.log(error);
  }
  //for observables
  constructor(private _sponsorOpS: SponsorOpService,
              private _http: HttpClient) { 
    
      
  }

  sendDetails(){
    const request = this._http.post('http://jsonplaceholder.typicode.com/posts',{
      Name: this.Name,
      Email: this.Email,
      Company: this.Company,
      Phone: this.Phone,
      AwardId: this.AwardInput,
      AwardName: this.AwardId
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error posting data');
        }
      )
  }

  searchSponsors(){
    this.searching = true;
    return this._sponsorOpS.getPotentialSponsors().subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => this.searching = false
    )
  }

  setAward(id){
    if(this.Selected){
      this.clear();
    }
    this.AwardId = id.AwardName;
    this.Selected = id;
    this.AwardInput = id.AwardId;
    let index = this.potential.indexOf(id);
    if (index !== -1) {
      this.potential.splice(index, 1);
    } 
  }
  clear(){
    if(this.Selected){
      this.potential.push(this.Selected);
    }
    this.AwardId = '';
    this.Selected ='';
  }
  ngOnInit() {
    //this.searchSponsors();                    //for live api
    this.potential = this.AWARDS;               //for offline testing
    this.sponsorsFound = true;                  //for offline testing
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
