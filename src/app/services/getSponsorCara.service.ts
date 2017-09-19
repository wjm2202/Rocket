import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { sponCarouselModel } from '../interfaces/sponCarouselModel';
import { environment } from '../../environments/environment';
import "rxjs/Rx";

@Injectable()
export class getSponsorCaraService {

    constructor(private http: Http) {

    }
    getAllSponsorCaraPics() {
        return this.http
            .get(environment.baseURI+'sponsorCarosouel')
            .map((response: Response) => {
                return <sponCarouselModel[]>response.json();
            })
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}

