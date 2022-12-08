import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ReactiveForm_Ang';
  constructor(private fb: FormBuilder) {}
  cities = [
    { CityID: 1, CityName: 'Ahmedabad' },
    { CityID: 2, CityName: 'Vadodara' },
    { CityID: 3, CityName: 'Surat' },
    { CityID: 4, CityName: 'Rajkot' },
  ];
  profileForm = this.fb.group({
    Name: this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
    }),
    Address: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
    }),
    Gender: this.fb.group({
      gender: ['', Validators.required],
    }),
  });
  onSubmit() {
    console.log(this.profileForm.value);
    console.log(this.profileForm.value.Name?.fname);
  }
}
