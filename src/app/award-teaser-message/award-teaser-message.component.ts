import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface EventModel {
  eventBlurb: string;
  eventDate: Date;
  eventIsVisable: boolean;
  eventLocation: string;
  eventTitle: string;
}


@Component({
  selector: 'app-award-teaser-message',
  templateUrl: './award-teaser-message.component.html',
  styleUrls: ['./award-teaser-message.component.css']
})
export class AwardTeaserMessageComponent implements OnInit {
  events: EventModel;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<EventModel>('https://webservices-test.aut.ac.nz/ecms/api/event').subscribe
      (data => {
        this.events = data;
        //console.log("EventBlurb: " + this.events[0].eventBlurb);
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