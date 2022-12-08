import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-greater',
  templateUrl: './greater.component.html',
  styleUrls: ['./greater.component.css'],
})
export class GreaterComponent {
  @Input() num1: number = 0;
  @Input() num2: number = 0;
}
