import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'CtoP_Ang';
  name: string ="";
  handleChange(name:string){
    this.name = name;
  }
}
