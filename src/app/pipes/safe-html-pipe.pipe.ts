import { DomSanitizer } from '@angular/platform-browser'
import { Pipe, PipeTransform, Component, Input} from '@angular/core';

@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
@Component({
    selector:"printSlide",
    template:`
        <div *ngIf="meta.sType=='div'" [innerHtml]="meta.content | safeHtml">

        </div>
        <img [src]="meta.imgSrc" *ngIf="meta.sType=='img'" />
    `
})
export class printSlide{
    @Input("meta") meta:any;
    constructor(){

    }
}


