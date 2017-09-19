import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

@Pipe({name: 'photoApend'})

export class PhotoPipe implements PipeTransform{
    transform(items: any): any {
        console.log('photo pipe ' +environment.baseURL+'sponsorCarousel'+items);
        return environment.baseURL+'sponsorCarousel/'+items;
    }
} 