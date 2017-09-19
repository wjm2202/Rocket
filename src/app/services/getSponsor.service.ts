import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AwardModel } from '../interfaces/awardcard';
import { environment } from '../../environments/environment';
import "rxjs/Rx";

@Injectable()
export class GetMainSponsorService {

  constructor(private http:Http) { 

  }
  getAllSponsorPics(){
    return this.http
    .get(environment.baseURI+'sponsors')
    .map((response: Response) => {
      return <AwardModel[]>response.json();
    })
    .catch(this.handleError);
  }
  private handleError(error: Response){
    return Observable.throw(error.statusText);
  }
}
