import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { UrlStrip } from '../pipes/imagestrip';
import { PhotoPipe } from '../pipes/photo.pipe';
import { GetMainSponsorService } from '../services/getSponsor.service';

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
  constructor(private getSponsors:GetMainSponsorService) { }
   getSponsor(): void {
    this.getSponsors.getAllSponsorPics()
    .subscribe(resultArray => this.sponsors = resultArray,
    error => console.log("Error :: "+ error)
   )
  }
  ngOnInit() {
    this.getSponsor();
  }

}
