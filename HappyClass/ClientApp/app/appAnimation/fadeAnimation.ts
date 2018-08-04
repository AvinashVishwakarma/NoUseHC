import {
  trigger,
  animate,
  transition,
  style,
  query,
  stagger,
  animateChild
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* => *', [
    query(
      ':enter',
      [style({ opacity: 0 })],
      { optional: true }
    ),
    query(
      ':leave',
      [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ':enter',
      [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
      { optional: true }
    ),
    query('@list', [
      animateChild()
    ], { optional: true }),
  ])
]);


export const leftAnimation = trigger('leftAnimation', [
  transition('* => *', [
    query(
      ':enter',
      [style({ 'padding-left': '1000px' })],
      { optional: true }
    ),
    query(
      ':leave',
      [style({ 'padding-left': '0px' }), animate('0.3s', style({ 'padding-left': '1000px' }))],
      { optional: true }
    ),
    query(
      ':enter',
      [style({ 'padding-left': '1000px' }), animate('0.3s', style({ 'padding-left': '0px' }))],
      { optional: true }
    ),
    query('@list', [
      animateChild()
    ], { optional: true }),
  ])
]);

export const animateList = trigger('list', [
  transition(':enter', [
    query('@items', stagger(300, animateChild()))
  ]),
]);

export const listItemAnimation = trigger('items', [
  transition(':enter', [
    style({ opacity: 0 }),  // initial
    animate('0.5s',
      style({ opacity: 1 }))  // final
  ])
]);
