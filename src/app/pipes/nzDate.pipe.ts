import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

@Pipe({name: 'nzDate'})

export class NzDatePipe implements PipeTransform{
    transform(items: any): any {
        var year = items.slice(0,4);
        var month = items.slice(5,7);
        var day = items.slice(8,10);
        var time = items.slice(12,19);
        return day+"/"+month+"/"+year+" Time: "+time;
    }
} 

//2017-12-12T04:00:00Z