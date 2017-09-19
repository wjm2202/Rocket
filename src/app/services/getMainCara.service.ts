import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AwardModel } from '../interfaces/awardcard';
import { environment } from '../../environments/environment';
import "rxjs/Rx";

@Injectable()
export class GetMainCaraService {

  constructor(private http:Http) { 

  }
  getAllMainCaraPics(){
    return this.http
    .get(environment+'maincarosouel')
    .map((response: Response) => {
      return <AwardModel[]>response.json();
    })
    .catch(this.handleError);
  }
  private handleError(error: Response){
    return Observable.throw(error.statusText);
  }
}

