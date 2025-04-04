import {
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, MatIconModule, HeaderComponent, FooterComponent],
})
export class AppComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    // Verificar si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      const bannerDisabled = localStorage.getItem('bloqueo_closed') === 'true';

      if (!bannerDisabled) {
        const URL = 'https://x.com/Manz/status/1893709639125987637';
        const IMAGE_URL = '/assets/bloqueo.png';

        const div = this.renderer.createElement('div');
        this.renderer.addClass(div, 'spain-block');

        const button = this.renderer.createElement('button');
        const buttonText = this.renderer.createText('✕');
        this.renderer.appendChild(button, buttonText);

        const anchor = this.renderer.createElement('a');
        this.renderer.setAttribute(anchor, 'href', URL);
        this.renderer.setAttribute(anchor, 'target', '_blank'); // Open link in a new tab
        this.renderer.setAttribute(anchor, 'rel', 'noopener noreferrer'); // Security best practices

        const img = this.renderer.createElement('img');
        this.renderer.setAttribute(img, 'src', IMAGE_URL);
        this.renderer.setAttribute(
          img,
          'alt',
          'Este sitio web es bloqueado en España cuando hay fútbol'
        );

        this.renderer.appendChild(anchor, img);
        this.renderer.appendChild(div, button);
        this.renderer.appendChild(div, anchor);
        this.renderer.appendChild(document.body, div);

        this.renderer.listen(button, 'click', () => {
          localStorage.setItem('bloqueo_closed', 'true');
          this.renderer.removeChild(document.body, div);
        });
      }
    }
  }
}
