import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-raspberry',
  imports: [CommonModule, TranslocoPipe],
  templateUrl: './raspberry.component.html',
  styleUrl: './raspberry.component.scss'
})
export class RaspberryComponent {

}
