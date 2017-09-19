import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface OrgMessageModel {
  messageIsVisable: string;
  messageTitle: string;
  orgMessage: string;
}

@Component({
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html',
  styleUrls: ['./welcome-message.component.css']
})
export class WelcomeMessageComponent implements OnInit {
  messages: OrgMessageModel
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<OrgMessageModel>(environment.baseURI+'orgmessage').subscribe
      (data => {
        this.messages = data;
        //console.log("orgMessage: " + this.messages[0].orgMessage);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side Error Occured");
        } else {
          console.log("Server-side Error Occured");
        }
      }

      )
  }
}