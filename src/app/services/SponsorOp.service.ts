import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class SponsorOpService{

    constructor(private _http:Http){
        
    }
    
    getPotentialSponsors(){
        return this._http.get(environment.baseURI+'needssponsor')
        .map(res => res.json());
    }    
}