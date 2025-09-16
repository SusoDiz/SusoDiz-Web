import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class HeaderComponent implements OnInit {
  menuOpen = false;
  currentRoute = '';

  constructor(private router: Router) {}

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
}
