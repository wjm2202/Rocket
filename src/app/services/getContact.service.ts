import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";
@Injectable()
export class GetContactService{

    constructor(private _http: Http){

    }

    getAllContact(){
        
    }

    private handleError(error: Response){
        return Observable.throw(error.statusText);
    }
}