import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

@Pipe({
  name: 'appendMaincara'
})
export class AppendMaincaraPipe implements PipeTransform {

  transform(items: any): any {
    console.log('append-general    '+environment.baseURL+'welcomeCarousel/' + items);
    return environment.baseURL+'welcomeCarousel/' + items;
  }

}
