import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { AwardModel } from '../interfaces/awardcard'
import { environment } from '../../environments/environment';
import { DateService } from '../services/currentDate.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinct';

@Component({
  selector: 'app-word-search',
  templateUrl: './word-search.component.html',
  styleUrls: ['./word-search.component.css']
})
export class WordSearchComponent implements OnInit {
  hasResults:boolean = false;
  status:string = '';
  results;                                                //values returned from search
  searchTerm:string;                                      //string entered for search
  latestSearch = new Subject<string>();                   //sub of observable
  selected =0;
  criteria: string = 'StudentName';
  showResults:boolean = true;
  
  constructor(private http:Http,
    public dateService:DateService) {                         //import Http singleton
    this.results = this.latestSearch                       //latest to results
    
    .debounceTime(500)                                     //500ms after typing to api call
    .filter(term =>!!term)                                 //result is truthy not empty
    .map(input => {
      let result = '';
      for(let char of input){
        if((char != '%')&&(char != '&')&&(char != '*')&&(char != '+')&&(char != ':')){   //remove html special chars RESERVED
          result += char;
        }
      }
      return result;
    }) 
    //to use a variable in a string use back ticks`string${variable}string`  
    .switchMap(term => this.http.get(environment.baseURI+`search/${this.criteria}/${term}`) //get request github
    .map(res => res.json())    //map the response to json get item => item.name
    .finally(()=> {
      this.status = 'Search Complete for   -   ' + this.criteria+ ': '+term;
    })
    );
    
  }
  test(id, selected){
    this.criteria = selected;
    this.selected = id;
  }
  newSearch(term){                                        //term from input
    if(!isNaN(term)){                                     //look for date input
      if(term > this.dateService.getDate()){
        term = this.dateService.getDate();
      }
    }
    this.status = 'Typing';
    this.showResults = true;
    this.latestSearch.next(term);                        //emit the latest term enterd
  }

  ngOnInit() {
  }

}
