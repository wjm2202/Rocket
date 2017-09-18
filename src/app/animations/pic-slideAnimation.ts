import {query, stagger, trigger, state, animate, transition, style, keyframes } from '@angular/animations';


export const animatePic =
trigger('picanimation',[
    transition('void => *', [
        query('.img-container', style({opacity: 0, transform: 'translateX(-150%)'})),

        query('.img-container', stagger('300ms',[
            animate('1s ease-in-out', style({opacity: 1, transform:'translate(0)'}))
            ]))
        ]),
        transition('* => void', [
            query('.img-container', style({opacity: 1, transform: 'translateX(0)'})),
    
            query('.img-container', stagger('300ms',[
                animate('1s ease-in-out', style({opacity: 0, transform:'translate(150%)'}))
                ]))
            ])
    ])

