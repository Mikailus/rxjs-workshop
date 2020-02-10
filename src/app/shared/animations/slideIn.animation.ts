import { trigger, transition, style, query, group, animate, animateChild } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('Exercises <=> Exercise', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      group([
        query('@simpleFadeAnimation', animateChild()),
        query(':leave', [
          animate('300ms ease-in-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-in-out', style({ left: '0%'}))
        ])
      ]),
      query('@simpleFadeAnimation', animateChild()),
    ]),
    transition('Exercise <=> Exercises', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query('@simpleFadeAnimation', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-in-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-in-out', style({ left: '0%'}))
        ])
      ]),
      query('@simpleFadeAnimation', animateChild()),
    ])
  ]);