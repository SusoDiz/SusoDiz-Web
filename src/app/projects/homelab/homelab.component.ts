import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-homelab',
  standalone: true,
  imports: [CommonModule, TranslocoPipe],
  templateUrl: './homelab.component.html',
  styleUrl: './homelab.component.scss'
})
export class HomelabComponent {
  
}
