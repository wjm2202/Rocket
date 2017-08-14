// import the required animation functions from the angular animations module
import { trigger, state, animate, group, animateChild, query, stagger, transition, style } from '@angular/animations';
 
export const routerTransition = 
trigger('routerTransition',[
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    transition('* <=> *', [
      query(':enter, :leave', style({position:'fixed', width:'100%'})
      , {optional: true}),
      group([
        query(':enter', [
          style({ height:'0',overflow: 'hidden'}),
          animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({height:'*'}))
        ],{optional: true}),
        query(':leave',[
          style({ height:'*',overflow: 'hidden'}),
          animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({height:0}))
        ], {optional: true}),
      ])
    ])
  ]);
export const routerAnimation =
  trigger('changePage', [

    transition('* <=> *',[
      group([
        query(':enter',[
          style({height: '0'}),
          animate('0.5s', style({height:'*'})),
          animateChild()
        ],{optional: true}),
        query(':leave',[
          animate('0.5s', style({height: '0'})),
          animateChild()
        ],{optional: true})
      ])
    ])
  ]);
