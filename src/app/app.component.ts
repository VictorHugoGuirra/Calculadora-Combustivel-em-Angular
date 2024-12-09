import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { CalculadoraCombustivelComponent } from './calculadora-combustivel/calculadora-combustivel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalculadoraCombustivelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 // title = 'calculadora';
}
