import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../service/employees.service';

@Component({
  selector: 'app-allemployees',
  standalone: false,
  templateUrl: './allemployees.html',
  styleUrl: './allemployees.css'
})
export class Allemployees implements  OnInit{
  employees: any;
  constructor(private EmployeesService: EmployeesService){}

  ngOnInit(): void {
    this.viewAllEmployees();
  }

  viewAllEmployees(){
    this.employees = this.EmployeesService.getAllEmployees();
  }

}
