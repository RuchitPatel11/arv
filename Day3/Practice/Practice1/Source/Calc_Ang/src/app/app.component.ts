import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Calc_Ang';
  num1: number = 0;
  num2: number = 0;
  operation: string = '+';
}
