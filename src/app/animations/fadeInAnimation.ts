// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';
 
export const fadeInAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('fadeInAnimation', [
      state('*', style({})),
      transition('* => void', [
        style({ height: '!', opacity: 1 }),
        animate(1000, style({ height: 0, opacity: 0 }))
      ]),
      transition('void => *', [
        style({ height: 0, opacity: 0 }),
        animate(1000, style({ height: '!', opacity: 1 }))
      ])
    ])