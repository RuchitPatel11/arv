import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
 
})
export class ErrorsComponent{
  @Input() field:any;

}
