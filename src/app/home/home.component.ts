import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule, FormsModule, TranslocoPipe],
})
export class HomeComponent {
  isNewsletterVisible: boolean = true;
  errorMessage: string | null = null;

  toggleNewsletter(): void {
    this.isNewsletterVisible = !this.isNewsletterVisible;
  }

  onSubmit(event: Event): void {
    const formElement = event.target as HTMLFormElement;
    const emailInput = formElement.querySelector('input[type="email"]') as HTMLInputElement;

    this.errorMessage = null;

    // 1. Validar el formulario con la API del navegador
    if (!formElement.checkValidity()) {
      // Si hay fallos, sí detenemos el envío para pintar nuestro error custom
      event.preventDefault();

      if (emailInput.value.trim() === '') {
        this.errorMessage = 'newsletter.errors.required';
      } else if (emailInput.validity.typeMismatch) {
        this.errorMessage = 'newsletter.errors.invalid';
      } else {
        this.errorMessage = 'newsletter.errors.generic';
      }
    } else {
      // 2. ¡Formulario correcto!: Desactivamos el control de Angular y forzamos el submit nativo
      // Esto rompe la restricción de la directiva y ejecuta el POST hacia Listmonk
      formElement.submit();
    }
  }
}