import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AwardModel } from '../interfaces/awardcard';
import { environment } from '../../environments/environment';

@Injectable()

export class AwardsSearchService {
    visableAwards = [];
    awards: any[] = [];
    constructor(private http:Http){
        this.getAllAwards();
    }
    //api call
    getApiAwards(){
        return this.http
        .get(environment.baseURI+'awards')
        .map((response: Response) => {
          return <AwardModel[]>response.json();
        })
        .catch(this.handleError);
      }
    private handleError(error: Response){
        return Observable.throw(error.statusText);
    }
    getAllAwards(): void {
        this.getApiAwards()
        .subscribe(resultArray => this.awards = resultArray,
        error => console.log("Error :: "+ error)
       )
    }

    //return the whole array
    getAwards(){
        return this.awards.slice(0);
    }
    //return the exact award
    getAward(id:number){
        return this.awards.slice(0).find(award => award.awardId == id);
    }
}

