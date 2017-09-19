import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface SponsorshipModel {
  Message: string;
  isVisable: boolean;
}

@Component({
  selector: 'app-sponsorship-message',
  templateUrl: './sponsorship-message.component.html',
  styleUrls: ['./sponsorship-message.component.css']
})
export class SponsorshipMessageComponent implements OnInit {
  messages: SponsorshipModel;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getMessage();
  }
  getMessage() {
    this.httpClient.get<SponsorshipModel>(environment.baseURI+'sponsorship').subscribe
      (
      data => {
        this.messages = data;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side Error Occured');
        } else {
          console.log('Server-side Error Occured');
        }
      }
      )
  }
}