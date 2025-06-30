import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeesService } from '../service/employees.service';
import { Route, Router } from '@angular/router';
import { Employee } from '../model/employee.model';
import { LocationService } from '../service/location.service';
import { Location } from '../model/location.model';

@Component({
  selector: 'app-addemployee',
  standalone: false,
  templateUrl: './addemployee.html',
  styleUrl: './addemployee.css'
})
export class Addemployee implements OnInit {
  formGroup!: FormGroup;
  locations: Location[] = [];
  
  constructor(
    private employeeService: EmployeesService,
    private locationService: LocationService,
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
      salary: [''],
      location: this.formBuilder.group({
        id: [''],
        name: [''],
        photo: ['']
      })

    });

    this.loadAllLocation();

    this.formGroup.get('location')?.get('name')?.valueChanges.subscribe(name =>{
        const selectedLocation = this.locations.find(loc => loc.name === name);
        if(selectedLocation){
          this.formGroup.patchValue({location: selectedLocation})
        }
      }
    )

  }

  addEmployee(): void {
    const employee: Employee = { ...this.formGroup.value };

    this.employeeService.addEmployee(employee).subscribe({
      next: (res) => {
        this.loadAllLocation();
        this.formGroup.reset();
        this.router.navigate(['allemployees'])
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  loadAllLocation(): void{
    this.locationService.getAlllocations().subscribe({
      next: (res) => {
        this.locations = res;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
