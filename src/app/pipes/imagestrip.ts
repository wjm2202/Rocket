import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'stripurl'})

export class UrlStrip implements PipeTransform {
    transform(value: string): string {
        
        let location = value.indexOf(',');
        let result = value.slice(0,location);
        //console.log('stripurl pipe result '+result);
        return result;
    }
}