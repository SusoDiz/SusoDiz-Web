import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    RouterModule,
    CommonModule,
    TranslocoPipe
  ]
})
export class HeaderComponent implements OnInit {
  menuOpen = false;
  currentRoute = '';

  constructor(
    private router: Router,
    private translocoService: TranslocoService
  ) {}

  ngOnInit() {
    // Obtener la ruta actual al inicializar
    this.currentRoute = this.router.url;
    
    // Escuchar cambios de ruta
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentRoute = event.url;
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  isActiveRoute(route: string): boolean {
    if (route === '/') {
      return this.currentRoute === '/';
    }
    return this.currentRoute.startsWith(route);
  }

  changeLanguage(lang: string) {
    if (typeof document !== 'undefined') {
      // 1. Empaña al instante
      document.body.classList.add('lang-switching-text');

      // 2. Espera un poco para el empañado
      setTimeout(() => {
        this.translocoService.setActiveLang(lang);

        try {
          if (window.localStorage) localStorage.setItem('preferred-language', lang);
        } catch (e) {}

        // 3. Quitamos la clase: aquí es donde el CSS aplica la transición de 0.5s para volver a filter: blur(0) y opacity: 1
        setTimeout(() => {
          document.body.classList.remove('lang-switching-text');
        }, 50); 
      }, 100); // Tiempo que el texto está "borroso"
    }
  }

  getCurrentLanguage(): string {
    return this.translocoService.getActiveLang();
  }
}
