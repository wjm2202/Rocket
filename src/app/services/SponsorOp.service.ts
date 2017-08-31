import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SponsorOpService{

    constructor(private _http:Http){
        
    }
    
    getPotentialSponsors(){
        return this._http.get('https://webservices-test.aut.ac.nz/ecms/api/needssponsor')
        .map(res => res.json());
    }    
}