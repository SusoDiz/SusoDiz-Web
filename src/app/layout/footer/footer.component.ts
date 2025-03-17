import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [
    RouterModule,
  ]
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear(); // Obtiene el año actual
}
