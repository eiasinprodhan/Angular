import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeesService } from '../service/employees.service';
import { Route, Router } from '@angular/router';
import { Employee } from '../model/employee.model';
import { error } from 'console';

@Component({
  selector: 'app-addemployee',
  standalone: false,
  templateUrl: './addemployee.html',
  styleUrl: './addemployee.css'
})
export class Addemployee implements OnInit {
  formGroup!: FormGroup;
  
  constructor(
    private employeeService: EmployeesService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: [''],
      email: [''],
      phone: [''],
      gender: [''],
      designation: [''],
      salary: ['']

    })
  }

  addEmployee(): void {
    const employee: Employee = { ...this.formGroup.value };

    this.employeeService.addEmployee(employee).subscribe({
      next: (res) => {
        this.router.navigate(['allemployees'])
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
