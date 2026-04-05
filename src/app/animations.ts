import { trigger, transition, style, animate, query, group } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [

  // Usamos una lista de nombres para que coincida con tus rutas
  transition('ProjectsPage <=> Threshold95Page, ProjectsPage <=> HomelabPage, ProjectsPage <=> ExtensionLaligagatePage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({ position: 'absolute', top: 0, left: 0, width: '100%' })
    ], { optional: true }),
    
    group([
      query(':leave', [
        animate('400ms ease-in-out', style({ 
          opacity: 0, 
          transform: 'translateY(100%)' 
        }))
      ], { optional: true }),
      query(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('400ms ease-in-out', style({ 
          transform: 'translateY(0%)', 
          opacity: 1 
        }))
      ], { optional: true })
    ])
  ]),

  // Se aplica al Home, Timeline, About y al entrar a Proyectos desde el menú
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        minHeight: '100vh'
      })
    ], { optional: true }),
    
    query(':enter', [
      style({ opacity: 0, transform: 'scale(0.98) translateY(10px)' })
    ], { optional: true }),
    
    group([
      query(':leave', [
        animate('300ms ease-out', style({ opacity: 0, transform: 'scale(1.02)' }))
      ], { optional: true }),
      
      query(':enter', [
        animate('400ms cubic-bezier(0.4, 0, 0.2, 1)', 
          style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
      ], { optional: true })
    ])
  ])
]);