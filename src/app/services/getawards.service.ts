import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AwardModel } from '../interfaces/awardcard';
import { environment } from '../../environments/environment';
import { DateService } from '../services/currentDate.service';
import "rxjs/Rx";

@Injectable()
export class GetawardsService {
  maxDate;
  constructor(private http:Http,
              private dateService:DateService) { 
                
  }
  getAllAwards(){
    this.setDate();
    return this.http
    .get(environment.baseURI+'search/date/2016')   //search by current year    environment.baseURI+`search/${this.criteria}/${term}`
    .map((response: Response) => {
      return <AwardModel[]>response.json();
    })
    .catch(this.handleError);
  }

  getAward(id:number){
    return this.http
    .get(environment.baseURI+'awards/'+id)
    .map((response: Response) => {
      return <AwardModel[]>response.json();
    })
    .catch(this.handleError);
  }

  private handleError(error: Response){
    return Observable.throw(error.statusText);
  }

  setDate(){
    this.maxDate = this.dateService.getDate();
  }
}
