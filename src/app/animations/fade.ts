import { trigger, animate, transition, state, style, query } from '@angular/animations';

export const fade =

    trigger('dropdown', [
    transition(':enter', [   // :enter is alias to 'void => *'
    style({height:'0',overflow: 'hidden'}),
    animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({height:'*'}))
    ]),
    transition(':leave', [   // :leave is alias to '* => void'
    style({height:'*',overflow: 'hidden'}),
    animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({height:0}))
    ])
]);