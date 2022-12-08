import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css'],
})
export class CalcComponent {
  @Input() num1: number = 0;
  @Input() num2: number = 0;
  @Input() operation: string = '+';
  result: number| string= 0;

  computation() {
    const num1 = this.num1,
      num2 = this.num2;
    switch (this.operation) {
      case '+':
        this.result = num1 + num2;
        break;
      case '-':
        this.result = num1 - num2;
        break;
      case '*':
        this.result = num1 * num2;
        break;
      case '/':
        this.result = num1 / num2;
        break;
      default:
        this.result = 'Invalid';
        break;
    }
  }
}
