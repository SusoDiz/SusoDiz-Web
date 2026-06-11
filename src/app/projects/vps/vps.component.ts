import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-vps',
  imports: [CommonModule, TranslocoPipe],
  templateUrl: './vps.component.html',
  styleUrl: './vps.component.scss'
})
export class VpsComponent {

}
