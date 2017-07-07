// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

import { AnimationEntryMetadata } from '@angular/core';

export function routerTransition() {
  return fadeInAnimation();
}

export const fadeInAnimation: AnimationEntryMetadata =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('fadeInAnimation', [

    // route 'enter' transition
    transition(':enter', [

      // css styles at start of transition
      style({ opacity: 0 }),

      // animation and styles at end of transition
      animate('1.3s', style({ opacity: 1 }))
    ]),
  ]);

export const slideInDownAnimation: AnimationEntryMetadata =
  trigger('routeAnimation', [
    state('*',
      style({
        opacity: 1,
        transform: 'translateX(0)'
      })
    ),
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      animate('1.2s ease-in')
    ]),
    transition(':leave', [
      animate('0.5s ease-out', style({
        opacity: 0,
        transform: 'translateY(100%)'
      }))
    ])
  ]);