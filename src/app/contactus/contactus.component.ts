import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../interfaces/contact';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { GetContactService } from '../services/getContact.service';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
  providers: [ GetContactService ]
})
export class ContactusComponent implements OnInit {

  contacts: ContactModel[];//Declare array of contact
  header:string ='card-header-300px.jpg';
  constructor(private getContacts: GetContactService) { }

  ngOnInit() {
    this.getContact();
  }

  getContact() : void{//Create function to get contact data from sharepoint and pass to
    //contact array
    this.getContacts.getAllContact()
    .subscribe(resultArray => this.contacts = resultArray,
    error => console.log("Error :: "+ error));
  }

}
