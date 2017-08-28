import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
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
  results;                                                //values returned from search
  searchTerm:string;                                      //string entered for search
  latestSearch = new Subject<string>();                   //sub of observable
  selected =0;
  criteria: string = 'StudentName';
  showResults:boolean = false;
  
  test(id, selected){
    this.criteria = selected;
    console.log(this.criteria);
    this.selected = id;
    console.log(this.selected);
  }
  newSearch(term){                                        //term from input
    this.showResults = true;
    this.latestSearch.next(term);                        //emit the latest term enterd
  }
  constructor(private http:Http) {                         //import Http singleton
    this.results = this.latestSearch                       //latest to results
    .debounceTime(500)                                     //500ms after typing to api call
    .distinct()                                            //only search for distinct changes
    .filter(term =>!!term)                                 //result is truthy not empty
    //to use a variable in a string use back ticks`string${variable}string`  
    .switchMap(term => this.http.get(`https://api.github.com/search/repositories?q=${term}&sort=stars&order=desc`) //get request github
    .map(res => res.json().items.map(item => item.name))    //map the response to json get item => item.name
    );
  }
  ngOnInit() {
  }

}
