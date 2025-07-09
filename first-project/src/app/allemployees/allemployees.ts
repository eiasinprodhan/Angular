import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EmployeesService } from '../service/employees.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

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
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.viewAllEmployees();
    this.getRole();
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

  updateEmployee(id: string) {
    this.router.navigate(['updateemployee', id]);
  }

  getRole(): boolean {
    if (this.authService.getUserRole() === 'admin') {
      return true;
    } else if (this.authService.getUserRole() === 'hr') {
      return true;
    } else {
      return false;
    }
  }
}
