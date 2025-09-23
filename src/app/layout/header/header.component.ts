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
    this.translocoService.setActiveLang(lang);
    // Guardar la preferencia en localStorage (solo en el navegador)
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('preferred-language', lang);
      }
    } catch (error) {
      // Silenciar errores de localStorage en SSR
    }
  }

  getCurrentLanguage(): string {
    return this.translocoService.getActiveLang();
  }
}
