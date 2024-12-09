import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-calculadora-combustivel',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora-combustivel.component.html',
  styleUrl: './calculadora-combustivel.component.css'
})
export class CalculadoraCombustivelComponent {
  precoAlcool: number = 0;
  precoGasolina: number = 0;
  mensagem: string = '';


calcular() {
  const razao = this.precoAlcool / this.precoGasolina;
  if (razao >= 0.7) {
    this.mensagem = 'É ideal abastecer com gasolina.';
    this.precoAlcool = 0; //zerando os campos
    this.precoGasolina = 0;
  } else {
    this.mensagem = 'É ideal abastecer com alcool.';
    this.precoAlcool = 0; //zerando os campos
    this.precoGasolina = 0;
  }
}
}