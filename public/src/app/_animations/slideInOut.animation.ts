// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style, query, stagger, keyframes } from '@angular/animations';

export function slideIn() {
    return trigger('slideIn', [
        transition('* => *', [

            // starting item position
            query('.slide-in', style({ opacity: 0, transform: 'translateY(40px)' })),

            // final item position
            query('.slide-in', stagger('200ms', [
                animate('800ms .1s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
            ])),

            // Reset the state of item
            query('.slide-in', [
                animate(300, style('*'))
            ])

        ])
    ])
}

export function slideInList() {
    return trigger('listAnimation', [
        transition('* => *', [

             // starting item position
            query(':enter', style({ opacity: 0, transform: 'translateY(40px)' }), {optional: true}),

            // final item position
            query(':enter', stagger('200ms', [
                animate('800ms .1s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
            ]), {optional: true}),
        ])
    ])
}