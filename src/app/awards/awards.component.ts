import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { UrlStrip } from '../pipes/imagestrip';
import { AppendAssetsPipe } from '../pipes/append-assets.pipe';
import { AppendSponsorPipe } from '../pipes/append-sponsor.pipe';
import { GetawardsService } from '../services/getawards.service';
import { AwardModel } from '../interfaces/awardcard';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { DateService } from '../services/currentDate.service';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css'],
  providers: [GetawardsService]
})
export class AwardsComponent implements OnInit {
  awards: AwardModel[];
  header:string ='card-header-300px.jpg';
  constructor(private http: HttpClient,
              private AllAwards :GetawardsService,
              private router: Router,
            private dateService:DateService) { 
                                     
  }
    
  getAwards(): void {
    this.AllAwards.getAllAwards()
    .subscribe(resultArray => this.awards = resultArray,
    error => console.log("Error :: "+ error)
   )
  }
  

  ngOnInit() {
    this.getAwards(); 
  }

}
