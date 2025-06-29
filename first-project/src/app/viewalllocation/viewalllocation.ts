import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from '../service/location.service';

@Component({
  selector: 'app-viewalllocation',
  standalone: false,
  templateUrl: './viewalllocation.html',
  styleUrl: './viewalllocation.css'
})
export class Viewalllocation implements OnInit{
  locations: any;
  constructor(
    private locationService: LocationService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.viewAllLocations();
  }

  viewAllLocations() {
    this.locations = this.locationService.getAlllocations();
  }

  deleteLocation(id: string): void {
    this.locationService.deletelocation(id).subscribe({
      next: (res) => {
        console.log(res);
        this.cdr.reattach();
        this.viewAllLocations();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  updateLocation(id: string) {
    this.router.navigate(['updatelocation', id]);
  }
}
