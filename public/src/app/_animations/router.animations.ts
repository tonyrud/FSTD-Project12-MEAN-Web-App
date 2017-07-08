import {trigger, state, animate, style, transition} from '@angular/animations';

export function routerTransition() {
  return trigger('routerTransition', [
    state('void', style({position:'absolute', width:'100%'}) ),
    state('*', style({position:'initial', width:'100%'}) ),
    transition(':enter', [
      style({opacity: 0}),
      animate('0.3s ease-in-out', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      style({opacity: 1}),
      animate('0.1s ease-in-out', style({opacity: 0}))
    ])
  ]);
}