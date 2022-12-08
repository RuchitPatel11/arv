import { Component } from '@angular/core';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',

})
export class AlphabetComponent{
  alphabets: string[] = [];
  constructor() {
    for (let i = 65; i < 91; i++) {
      this.alphabets.push(String.fromCharCode(i));
    }
  }

}
