import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeesService } from '../service/employees.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-updateemployee',
  standalone: false,
  templateUrl: './updateemployee.html',
  styleUrl: './updateemployee.css'
})
export class Updateemployee implements OnInit {
  id!: string;
  employee: Employee = new Employee();

  constructor(
    private employeeService: EmployeesService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.employee = new Employee();
    this.id = this.activeRoute.snapshot.params['id'];
    
    this.employeeService.getById(this.id).subscribe({
      next: (res) => {
        this.employee = res;
        this.cdr.detectChanges();
        console.log(res);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe({
      next: (res) => {
        this.router.navigate(['allemployees'])
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
