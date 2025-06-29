import { Component, OnInit } from '@angular/core';
import { LocationService } from '../service/location.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '../model/location.model';

@Component({
  selector: 'app-addlocation',
  standalone: false,
  templateUrl: './addlocation.html',
  styleUrl: './addlocation.css'
})
export class Addlocation implements OnInit {
  formGroup!: FormGroup;

  constructor(
    private locationService: LocationService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: [''],
      photo: ['']

    })
  }

  addLocation(): void {
    const location: Location = { ...this.formGroup.value };

    this.locationService.addlocation(location).subscribe({
      next: (res) => {
        this.router.navigate(['alllocations'])
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
