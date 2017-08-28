import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'photoApend'})

export class PhotoPipe implements PipeTransform{
    transform(items: any, criteria: string): any {
        return items.filter(item => {
            return 'http://ecms-award.aut.ac.nz/web/sponsorCarousel/'+item;
        });
    }
}