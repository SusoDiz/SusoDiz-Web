import { Injectable } from "@angular/core";
import { Translation, TranslocoLoader } from "@jsverse/transloco";
import { Observable, of } from "rxjs";

@Injectable({ providedIn: 'root' })
export class TranslocoServerLoader implements TranslocoLoader {
  
  getTranslation(lang: string): Observable<Translation> {
    // Cargamos las traducciones sincrónicamente para SSR
    let translation: Translation = {};
    
    try {
      if (lang === 'es') {
        translation = {
          "nav": {
            "home": "Inicio",
            "about": "Sobre mí",
            "projects": "Proyectos"
          },
          "home": {
            "description": "Aquí encontrarás información sobre mi perfil profesional y mis proyectos.",
            "subtitle": "🖥️ Técnico Informático | 🌐 Desarrollador Web"
          },
          "about": {
            "title": "Acerca de nosotros",
            "description": "Esta es la página de acerca de nosotros de la aplicación"
          }
        };
      } else if (lang === 'en') {
        translation = {
          "nav": {
            "home": "Home",
            "about": "About me",
            "projects": "Projects"
          },
          "home": {
            "description": "Here you will find information about my professional profile and my projects.",
            "subtitle": "🖥️ IT Technician | 🌐 Web Developer"
          },
          "about": {
            "title": "About us",
            "description": "This is the about us page of the application"
          }
        };
      }
    } catch (error) {
      console.error(`Error loading translation for ${lang}:`, error);
    }
    
    return of(translation);
  }
}
