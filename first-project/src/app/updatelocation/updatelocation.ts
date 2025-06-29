import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LocationService } from '../service/location.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '../model/location.model';

@Component({
  selector: 'app-updatelocation',
  standalone: false,
  templateUrl: './updatelocation.html',
  styleUrl: './updatelocation.css'
})
export class Updatelocation implements OnInit {
  id!: string;
  location: Location = new Location();

  constructor(
    private locationService: LocationService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.location = new Location();
    this.id = this.activeRoute.snapshot.params['id'];

    this.locationService.getById(this.id).subscribe({
      next: (res) => {
        this.location = res;
        this.cdr.detectChanges();
        console.log(res);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  updateLocation() {
    this.locationService.updatelocation(this.id, this.location).subscribe({
      next: (res) => {
        this.router.navigate(['alllocations'])
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
