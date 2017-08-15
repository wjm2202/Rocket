import { trigger, stagger, keyframes, animate, transition, state, style, query } from '@angular/animations';


//experimental animation for teasers        
export const smoothDropper = 
        trigger('smooth', [
        transition('void => *', [
            query('.inner-wrapper', style({height:'0',overflow: 'hidden'}), {optional: true}),
            query('.inner-wrapper', stagger('300ms', [
                animate('0.8s ease-in', keyframes([
                    style({ height:'20%', offset: 0.1}),
                    style({ height:'50%', offset: 0.2}),
                    style({ height:'70%', offset: 0.4}),
                    style({ height:'80%', offset: 0.6}),
                    style({ height:'90%', offset: 0.8}),
                    style({ height:'95%', offset: 0.9}),
                    style({ height:'100%', offset: 1.0}),
                    ]))]), {optional: true}),
            ]),
        transition('* => void', [
            query('.inner-wrapper', style({ opacity: 1}), {optional: true}),
            query('.inner-wrapper', stagger('300ms', [
                animate('0.3s ease-in', keyframes([
                    style({opacity: 1, transform: 'translateY(0)', offset: 0.1}),
                    style({opacity: .7, transform: 'translateY(-7px)', offset: 0.2}),
                    style({opacity: .3, transform: 'translateY(-15px)', offset: 0.4}),
                    style({opacity: 0, transform: 'translateY(-25px)', offset: 0.6}),
                    style({opacity: 0, transform: 'translateY(-35px)', offset: 0.8}),
                    style({opacity: 0, transform: 'translateY(-55%)', offset: 0.9}),
                    style({opacity: 0, transform: 'translateY(-75px)', offset: 1.0}),
                    ]))]), {optional: true}),
            ])
        ]);