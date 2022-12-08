import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'HelloWorld_Ang';
  name = 'Ruchit';

  handleChange(e: any) {
    this.name = e.target.value;
  }
}
