import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'awardAwardDegreeLevelFilter'})

export class AwardLevelPipe implements PipeTransform{
    transform(items: any[], criteria: string): any {
        if(criteria === 'all') {return items} else
        return items.filter(item => {
            return item.AwardDegreeLevel === criteria;
        });
    }
}