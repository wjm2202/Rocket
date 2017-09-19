import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'assetsAppendGeneral' })

export class AppendAssetsPipe implements PipeTransform {
    transform(items: any): any {
        console.log('append general   http://ecms-award.aut.ac.nz/web/assets/' + items);
        return 'http://ecms-award.aut.ac.nz/web/assets/' + items;
    }
} 