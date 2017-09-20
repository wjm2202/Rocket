import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { environment } from '../../environments/environment';

interface CurrentYear{
    Year:number;
}

@Injectable()
export class DateService implements OnInit{
      Date:CurrentYear[];
    constructor(private httpClient: HttpClient){

        this.httpClient.get<CurrentYear[]>(environment.baseURI+`currentyear`).subscribe(data => {
            this.Date = data;
            console.log('data service :'+this.Date[0].Year);
        },
            (err: HttpErrorResponse) => {
              if (err.error instanceof Error) {
                console.log('clientside error currentDate.service');
              } else {
                console.log('serverside error currentDate.service');
            }
        })
    }
    ngOnInit(){
        
    }
    getDate(){
        return this.Date[0].Year;
    }
   
}