import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { sponCarouselModel } from '../interfaces/sponCarouselModel';
import "rxjs/Rx";

@Injectable()
export class getSponsorCaraService {

    constructor(private http: Http) {

    }
    getAllSponsorCaraPics() {
        return this.http
            .get('https://webservices-test.aut.ac.nz/ecms/api/sponsorCarosouel')
            .map((response: Response) => {
                return <sponCarouselModel[]>response.json();
            })
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}

