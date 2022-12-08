import { Component } from '@angular/core';

interface Employee {
  id: string;
  name: string;
  address: string;
  gender: string;
  DOJ: string;
  hobbies: string;
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  emp: Employee = {
    id: '',
    name: '',
    address: '',
    gender: '',
    DOJ: '',
    hobbies: '',
  };
  employees: Employee[] = [
    {
      id: '1',
      name: 'Rahul Patel',
      address: 'Ahemdabad',
      gender: 'Male',
      DOJ: '2022-11-03',
      hobbies: 'Travelling,Cricket',
    },
    {
      id: '2',
      name: 'Dhruvi Shah',
      address: 'Surat',
      gender: 'Female',
      DOJ: '2022-09-03',
      hobbies: 'Singing',
    },
    {
      id: '3',
      name: 'Virendar Singh',
      address: 'Vadodara',
      gender: 'Male',
      DOJ: '2022-08-01',
      hobbies: 'Cricket',
    },
  ];

  addEmployee() {
    this.employees.push({
      id: this.emp.id,
      name: this.emp.name,
      address: this.emp.address,
      gender: this.emp.gender,
      DOJ: this.emp.DOJ,
      hobbies: this.emp.hobbies,
    });
  }
  sortEmployee() {
    this.employees.sort((a, b) => {
      if (a.name > b.name) return 1;
      else if (b.name > a.name) return -1;
      else return 0;
    });
  }
  filterEmployee() {
    this.employees = this.employees.filter(
      (item) => new Date(item.DOJ).getMonth() === new Date().getMonth()
    );
  }
}
