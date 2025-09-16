import { trigger, transition, style, animate, query, group } from '@angular/animations';

// Animación de deslizamiento horizontal
export const slideInAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative', overflow: 'hidden' }),
    
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      })
    ], { optional: true }),
    
    query(':enter', [
      style({ transform: 'translateX(100%)', opacity: 0 })
    ], { optional: true }),
    
    group([
      query(':leave', [
        animate('350ms ease-in-out', 
          style({ transform: 'translateX(-100%)', opacity: 0 })
        )
      ], { optional: true }),
      
      query(':enter', [
        animate('350ms ease-in-out', 
          style({ transform: 'translateX(0%)', opacity: 1 })
        )
      ], { optional: true })
    ])
  ])
]);

// Animación de fade simple y efectiva
export const fadeAnimation = trigger('fadeAnimation', [
  transition('* <=> *', [
    query(':enter', [
      style({ opacity: 0 })
    ], { optional: true }),
    
    query(':leave', [
      animate('200ms ease-out', style({ opacity: 0 }))
    ], { optional: true }),
    
    query(':enter', [
      animate('400ms 200ms ease-in', style({ opacity: 1 }))
    ], { optional: true })
  ])
]);
