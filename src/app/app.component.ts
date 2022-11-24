import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  valor1: number;
  valor2: number;
  valor3: number;
  resultado: string = '';

  constructor() {
    this.valor1 = this.retonarAleatorio();
    this.valor2 = this.retonarAleatorio();
    this.valor3 = this.retonarAleatorio();
  }
  retonarAleatorio() {
    return Math.trunc(Math.random() * 6) + 1;
  }
  lanzar() {
    this.valor1 = this.retonarAleatorio();
    this.valor2 = this.retonarAleatorio();
    this.valor3 = this.retonarAleatorio();

    if (this.valor1 == this.valor2 && this.valor1 == this.valor3) 
      this.resultado = 'Ganaste';
    else
    this.resultado='Perdiste '
  }
}
