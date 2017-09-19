import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

@Pipe({ name: 'assetsAppendGeneral' })

export class AppendAssetsPipe implements PipeTransform {
    transform(items: any): any {
        //console.log('append assets   '+environment.baseURL+'assets/' + items);
        return environment.baseURL+'assets/' + items;
    }
} 