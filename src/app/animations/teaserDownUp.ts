import { trigger, stagger, keyframes, animate, transition, state, style, query } from '@angular/animations';

export const teaser = 
        trigger('ngIfAnimation', [
        transition('void => *', [
            query('.inner-wrapper', style({ opacity: 0}), {optional: true}),
            query('.inner-wrapper', stagger('100ms', [
                animate('0.7s cubic-bezier(0.35, 0, 0.25, 1)', keyframes([
                    style({opacity: 0, transform: 'translateY(-75%)', offset: 0.1}),
                    style({opacity: 0, transform: 'translateY(-55%)', offset: 0.2}),
                    style({opacity: 0, transform: 'translateY(-35%)', offset: 0.4}),
                    style({opacity: .7, transform: 'translateY(-25%)', offset: 0.6}),
                    style({opacity: .8, transform: 'translateY(-15px)', offset: 0.8}),
                    style({opacity: .9, transform: 'translateY(-7px)', offset: 0.9}),
                    style({opacity: 1, transform: 'translateY(0)', offset: 1.0}),
                    ]))]), {optional: true}),
            ])
        ]);

        export const heightdown = 
        trigger('heightdown', [
        transition('void => *', [
            query('.inner-wrapper', style({ opacity: 0, height: 0}), {optional: true}),
            query('.inner-wrapper', stagger('100ms', [
                animate('0.5s  cubic-bezier(0.35, 0, 0.25, 1)', keyframes([
                    style({opacity: 1, height: '*', offset: 1.0}),
                    ]))]), {optional: true}),
        ])

        ]); 
        export const heightup =
        trigger('heightup', [
        transition('* => void', [
            query('.inner-wrapper', style({opacity: 1}), {optional: true}),
            query('.inner-wrapper', stagger('100ms', [
                animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', keyframes([
                    style({opacity: 0, height: '0', offset: 1.0}),
                    ]))]), {optional: true}),
        ])
        ]);

