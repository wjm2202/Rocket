import { trigger, animate, transition, state, style, query } from '@angular/animations';

export const teaser = 
    trigger('upDown', [
        state('down', style({
            overflow:'hidden',
            height:'auto',
            width:'100%'
        }))
    ])