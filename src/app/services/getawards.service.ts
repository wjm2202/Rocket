import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AwardModel } from '../interfaces/awardcard';
import { environment } from '../../environments/environment';
import "rxjs/Rx";

@Injectable()
export class GetawardsService {

  constructor(private http:Http) { 

  }
  getAllAwards(){
    return this.http
    .get(environment.baseURI+'awards')
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
}
