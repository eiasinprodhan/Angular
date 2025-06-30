import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeesService } from '../service/employees.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Location } from '../model/location.model';
import { LocationService } from '../service/location.service';

@Component({
  selector: 'app-updateemployee',
  standalone: false,
  templateUrl: './updateemployee.html',
  styleUrl: './updateemployee.css'
})
export class Updateemployee implements OnInit {
  id!: string;
  employee: Employee = new Employee();
  locations: Location[] = [];

  constructor(
    private employeeService: EmployeesService,
    private locationService: LocationService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.employee = new Employee();
    this.id = this.activeRoute.snapshot.params['id'];

    this.loadLocations();

    this.loadAllEmloyees();



  }

  loadAllEmloyees(): void {
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

  loadLocations(): void {
    this.locationService.getAlllocations().subscribe({
      next: (loc) => {
        this.locations = loc;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error fetching locations:', err)
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

  compareLocation(l1: Location, l2: Location): boolean {
    return l1 && l2 ? l1.id === l2.id : l1 === l2;
  }
}
