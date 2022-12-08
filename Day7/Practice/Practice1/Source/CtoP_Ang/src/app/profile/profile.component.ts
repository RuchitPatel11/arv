import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',

})
export class ProfileComponent {
  @Output() keyupChange = new EventEmitter<string>();
   name: string='';
  emitEvent() {
    this.keyupChange.emit(this.name);
  }
}
