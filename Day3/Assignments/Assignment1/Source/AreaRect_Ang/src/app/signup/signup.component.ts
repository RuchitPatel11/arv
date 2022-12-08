import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  name: string = '';
  pan: string = '';
  address: string = '';
  description: string = '';

  signUp() {
    this.description = `name:${this.name}`;
  }
}
