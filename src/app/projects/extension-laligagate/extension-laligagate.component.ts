import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-extension-laligagate',
  imports: [
    RouterModule,
    TranslocoPipe,
  ],
  templateUrl: './extension-laligagate.component.html',
  styleUrl: './extension-laligagate.component.scss'
})
export class ExtensionLaligagateComponent {

}
