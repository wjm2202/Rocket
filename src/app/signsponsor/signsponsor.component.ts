import { Component, OnInit, Input } from '@angular/core';
import { SponsorOpService } from '../services/SponsorOp.service';
import { UrlStrip } from '../pipes/imagestrip';
import {FormControl, FormGroup, FormBuilder, Validators, EmailValidator} from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { PhotoPipe } from '../pipes/photo.pipe';
import { AppendAssetsPipe } from '../pipes/append-assets.pipe';
import { environment } from '../../environments/environment';

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
  successMessage:any;                       //details posted for success message
  searchQuery:string ='';
  Name:string = "";                        //contact name
  Email:string ='';                        //contact email
  Company:string = '';                     //company name
  Phone:string = '';                       //phone number
  AwardId:string='';                       //award id
  AwardName:string='';                     //award name
  Comments:string='';                      //comments
  Selected = null;
  AwardInput:string='';
  Obj;
  headers;
  posted:any;
  head:string = 'card-header-300px.jpg';
  logo:string = 'sponsorLogoPlaceholder.jpg';

  //reactive form
  rForm:FormGroup;
  post:any;
  namealert:string = 'The Name field is required to submit';
  emailalert:string = 'The Email field is required to submit';
  companyalert:string = 'The Organisation field is required to submit';
  manual:boolean = false;

//api call success
  handleSuccess(data){
    this.sponsorsFound = true;
    this.potential = data;
    //console.log(data);
  }
  //api call failed
  handleError(error){
    this.postFailed = true;
    //console.log(error);
  }
  //for observables
  constructor(private _sponsorOpS: SponsorOpService,
              private fb:FormBuilder,
              private _http: HttpClient) { 
    this.rForm = fb.group({
      'name':[null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
      'email':[null, Validators.compose([Validators.required, Validators.email])],
      'company':[null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
      'phone': '',
      'awardname':'',
      'comments':'',
      'selfselect':''
      

    })
  }
//reactive forms
  addPost(post){
    this.Name = post.name;    
    this.Email = post.email;
    this.Company = post.company; 
    this.Phone = post.phone;
    if(post.awardname != ''){
      this.AwardName = post.awardname;
    }
    this.Comments = post.comments;
    this.postDetails();
  }
    
  postDetails(){
    const request = this._http.post<SuccessRes>(environment.baseURI+'sponsors',{
      awardId: `${this.AwardId}`,           //award id number
      awardName: `${this.AwardName}`,            //name of award
      comments: `${this.Comments}`,            //any comments made
      company: `${this.Company}`,              //company name
      email: `${this.Email}`,                  //contact email
      name: `${this.Name}`,                    //contact name
      phone: `${this.Phone}`                   //contact phone
    })
      .subscribe(
        res => {
          this.postSuccess = true;
          this.posted = res;
          //console.log('is post successful '+this.postSuccess);
          //console.log(this.posted);
        },
        err => {
          console.log('Error posting data:   '+ err);
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
    this.manual = true;
    this.AwardName = id.AwardName;
    this.AwardId = id.AwardId;
    if(this.Selected !== null){
      this.potential.push(this.Selected);
      //console.log('Selected is not null');
    }
    let index = this.potential.indexOf(id);
    this.Selected = this.potential[index];
    this.potential.splice(index,1);
    //console.log('selected: '+ this.Selected.AwardId);
    
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
    //this.potential = this.AWARDS;
    this.rForm.get('selfselect').valueChanges.subscribe(
      (selfselect) => {
        if(selfselect  == '1'){
          this.manual = true;
        }else{
          this.manual = false;
        }
      }
    )
  }
}
