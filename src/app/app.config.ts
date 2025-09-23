import { ApplicationConfig, provideZoneChangeDetection, isDevMode, PLATFORM_ID, inject } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideTransloco } from '@jsverse/transloco';
import { TranslocoHttpLoader } from '../transloco-loader';
import { isPlatformBrowser } from '@angular/common';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

// Función para detectar idioma del navegador y obtener preferencia guardada
function getBrowserLanguage(): string {
  // Verificar si estamos en el navegador (no en SSR)
  try {
    // Primero verificar si hay una preferencia guardada
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedLang = localStorage.getItem('preferred-language');
      if (savedLang && ['es', 'en'].includes(savedLang)) {
        return savedLang;
      }
    }
    
    // Si no hay preferencia guardada, detectar idioma del navegador
    if (typeof window !== 'undefined' && window.navigator) {
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('es')) {
        return 'es';
      } else if (browserLang.startsWith('en')) {
        return 'en';
      }
    }
  } catch (error) {
    // En caso de error (SSR), usar español por defecto
  }
  
  // Por defecto español
  return 'es';
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimations(),
    provideHttpClient(withFetch()),
    provideTransloco({
      config: {
        availableLangs: ['es', 'en'],
        defaultLang: getBrowserLanguage(),
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
        fallbackLang: 'es',
        missingHandler: {
          logMissingKey: false,
          useFallbackTranslation: true
        }
      },
      loader: TranslocoHttpLoader
    }),
  ]
};
