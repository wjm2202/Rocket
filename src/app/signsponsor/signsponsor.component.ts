import { Component, OnInit } from '@angular/core';
import { SponsorOpService } from '../services/SponsorOp.service';
import { UrlStrip } from '../pipes/imagestrip';
import {FormControl, FormGroup} from '@angular/forms';


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


  handleSuccess(data){
    this.sponsorsFound = true;
    this.potential = data;
    console.log(data);
  }
  handleError(error){
    console.log(error);
  }
  //for observables
  constructor(private _sponsorOpS: SponsorOpService) { }

  searchSponsors(){
    this.searching = true;
    return this._sponsorOpS.getPotentialSponsors().subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => this.searching = false
    )
  }

  setAward(id){
    this.AwardId = id.AwardName;
    this.Selected = id;
    this.AwardInput = id.AwardId;
  }
  clear(){
    this.AwardId = '';
    this.Selected ='';
  }
  ngOnInit() {
    this.searchSponsors();
  }

}
