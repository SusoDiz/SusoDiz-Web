import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrl: './error404.component.scss',
  imports: [RouterModule, TranslocoPipe]
})
export class Error404Component {
  // Componente intencionalmente simple: solo plantilla con título y enlace.
}
