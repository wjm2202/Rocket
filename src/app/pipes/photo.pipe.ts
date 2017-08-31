import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'photoApend'})

export class PhotoPipe implements PipeTransform{
    transform(items: any): any {
        return 'http://ecms-award.aut.ac.nz/web/sponsorCarousel/'+items;
    }
} 