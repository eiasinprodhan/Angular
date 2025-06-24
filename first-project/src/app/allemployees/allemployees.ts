import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EmployeesService } from '../service/employees.service';

@Component({
  selector: 'app-allemployees',
  standalone: false,
  templateUrl: './allemployees.html',
  styleUrl: './allemployees.css',
})
export class Allemployees implements OnInit {
  employees: any;
  constructor(
    private EmployeesService: EmployeesService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.viewAllEmployees();
  }

  viewAllEmployees() {
    this.employees = this.EmployeesService.getAllEmployees();
  }

  deleteEmployee(id: string): void {
    this.EmployeesService.deleteEmployee(id).subscribe({
      next: (res) => {
        console.log(res);
        this.cdr.reattach();
        this.viewAllEmployees();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
