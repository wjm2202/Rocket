import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

@Pipe({ name: 'photoAppendGeneral' })

export class PhotoGeneralPipe implements PipeTransform {
    transform(items: any): any {
        //console.log('append-general    '+environment.baseURL+'generalphotos/' + items);
        return environment.baseURL+'generalphotos/' + items;
    }
} 