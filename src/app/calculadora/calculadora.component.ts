import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  result: number = 0;

  onSubmit(f: NgForm) {
    let numA: number = f.value.numA
    let numB: number = f.value.numB
    let operator: string = f.value.operator

    this.result = eval(`${numA}${operator}${numB}`)
  }
}
