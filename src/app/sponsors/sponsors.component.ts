import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { UrlStrip } from '../pipes/imagestrip';
import { PhotoPipe } from '../pipes/photo.pipe';
import { GetMainSponsorService } from '../services/getSponsor.service';
import { Observable } from 'rxjs/Observable';

interface SponsorsModel {
  SponsorBlurb:string;
  SponsorId:number;
  SponsorLink:string;
  SponsorLogo:string;
  SponsorName:string;
}


@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css'],
  providers: [GetMainSponsorService]
})
export class SponsorsComponent implements OnInit {
  sponsors:SponsorsModel[];
  temp:SponsorsModel[];
  complete:boolean = false;
  constructor(private getSponsors:GetMainSponsorService) { 

  }
  shufflearray<T>(array: T[]): T[]{
    if(array.length <= 1){
      return array;
    }
    for (let i =0;i<array.length;i++){
      const randomChoiceIndex = Math.random() * ((array.length -1)-1) + 1;
      [array[i], array[randomChoiceIndex]] = [array[randomChoiceIndex], array[i]];
    }
    array.forEach(element => {
      console.log(element);
    });
    return array;
  }

   getSponsor(): void {
    this.getSponsors.getAllSponsorPics()
    .subscribe(resultArray => {
      this.sponsors = resultArray;
    },
    error => console.log("Error :: "+ error)
   )
  }
  ngOnInit() {
    this.getSponsor();
  }

}
