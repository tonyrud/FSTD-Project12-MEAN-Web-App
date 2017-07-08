import { trigger, state, animate, style, transition, stagger, query, keyframes } from '@angular/animations';

export function listAnimation() {
  // animation was not working on observable lists. this is from angular documentation
  trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(100, [
            animate('0.2s', style({ opacity: 0, transform: 'translateX(-40px)' }))
          ])
        ], { optional: true }),
        query(':enter', style({ opacity: 0, transform: 'translateX(-40px)' }), { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1, transform: 'translateX(0)' }))
          ])
        ], { optional: true })
      ])
    ])
}
