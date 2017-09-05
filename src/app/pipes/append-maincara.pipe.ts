import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendMaincara'
})
export class AppendMaincaraPipe implements PipeTransform {

  transform(items: any): any {
    return 'http://ecms-award.aut.ac.nz/web/welcomeCarousel/' + items;
  }

}
