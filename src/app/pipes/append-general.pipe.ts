import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'photoAppendGeneral' })

export class PhotoGeneralPipe implements PipeTransform {
    transform(items: any): any {
        return 'http://ecms-award.aut.ac.nz/web/generalphotos/' + items;
    }
} 