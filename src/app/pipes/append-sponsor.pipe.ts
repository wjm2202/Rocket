import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

@Pipe({
  name: 'appendSponsor'
})
export class AppendSponsorPipe implements PipeTransform {

  transform(items: any): any {
    console.log('append sponsor   '+environment.baseURL+'sponsorCarousel/' + items);
    return environment.baseURL+'sponsorCarousel/' + items;
  }

}