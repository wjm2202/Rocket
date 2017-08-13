import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AwardModel } from '../interfaces/awardcard';
import "rxjs/Rx";

@Injectable()
export class GetawardsService {

  constructor(private http:Http) { 

  }
  getAllAwards(){
    return this.http
    .get('https://webservices-test.aut.ac.nz/ecms/api/awards')
    .map((response: Response) => {
      return <AwardModel[]>response.json();
    })
    .catch(this.handleError);
  }
  private handleError(error: Response){
    return Observable.throw(error.statusText);
  }
}
