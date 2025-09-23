import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-threshold-95',
  templateUrl: './threshold-95.component.html',
  styleUrls: ['./threshold-95.component.scss'],
  imports: [
    CommonModule,
    TranslocoPipe
  ]
})
export class Threshold95Component {
  clicksRemaining: number = 100;
  loseProbability: number = 0.00; // 1% initial probability
  maxLoseProbability: number = 0.00;
  roundsPlayed: number = 0;
  message: string = '';

  play(): void {
    const random = Math.random();
    if (random < this.loseProbability) {
      this.message = 'threshold95.loseMessage';
      this.clicksRemaining = 0; // Marca el juego como terminado
    } else {
      this.clicksRemaining--;
      this.loseProbability += 0.01; // Incrementa la probabilidad en un 1% por clic
      if (this.loseProbability > this.maxLoseProbability) {
        this.maxLoseProbability = this.loseProbability;
      }

      if (this.clicksRemaining === 0) {
        this.message = 'threshold95.winMessage';
      }
    }
  }

  resetGame(): void {
    this.clicksRemaining = 100;
    this.loseProbability = 0.00; 
    this.roundsPlayed++;
    this.message = '';
  }

  getButtonColor(): string {
    const red = Math.min(255, Math.floor((100 - this.clicksRemaining) * 2.55)); // Incrementa el rojo
    const green = Math.max(0, Math.floor(this.clicksRemaining * 2.55)); // Decrementa el verde
    return `rgb(${red}, ${green}, 0)`; // Genera un color entre verde y rojo
  }
}