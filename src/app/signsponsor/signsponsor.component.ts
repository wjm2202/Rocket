import { Component, OnInit } from '@angular/core';
import { SponsorOpService } from '../services/SponsorOp.service';
import { UrlStrip } from '../pipes/imagestrip';
import {FormControl, FormGroup} from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { PhotoPipe } from '../pipes/photo.pipe';

interface SuccessRes{
  AwardId:string;
  AwardName:string;
  Company:string;
  Email:string;
  Name:string;
  Phone:string;
  Comments:string;
}

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
  postSuccess:boolean = false;              //post worked
  postFailed:boolean = false;               //post failed
  successMessage:any;                           //details posted for success message
  searchQuery:string ='';
  Name:string = "";
  Email:string ='';
  Company:string = '';
  Phone:string = '';
  AwardId:string='';
  Comments:string='';
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
    this.postFailed = true;
    console.log(error);
  }
  //for observables
  constructor(private _sponsorOpS: SponsorOpService,
              private _http: HttpClient) { }

  sendDetails(){
    this.postDetails(this.Name, this.Email, this.Company, this.Phone, this.AwardInput, this.AwardId, this.Comments);
  }            

  postDetails(Name:string, Email:string, Company:string, Phone:string, AwardInput:string, AwardId:string, Comments:string){
    //const headers = new HttpHeaders().set('Content-Type', 'application/json;');
    const request = this._http.post('https://webservices-test.aut.ac.nz/ecms/api/sponsors',{Name,Email,Company,Phone,AwardInput,AwardId})                                               //{headers: headers})
      .subscribe(
        res => {
          this.postSuccess = true;
          console.log('is post successful '+this.postSuccess);
          console.log(res);
        },
        err => {
          console.log('Error posting data'+ err.Error);
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
    this.postSuccess = false;
  }
  ngOnInit() {
    this.searchSponsors();                    //for live api
    //this.potential = this.AWARDS;               //for offline testing
    //this.sponsorsFound = true;                  //for offline testing
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
