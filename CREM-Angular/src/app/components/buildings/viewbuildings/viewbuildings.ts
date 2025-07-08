import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Building } from '../../../models/building.model';
import { BuildingService } from '../../../services/building.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewbuildings',
  standalone: false,
  templateUrl: './viewbuildings.html',
  styleUrl: './viewbuildings.css'
})
export class Viewbuildings implements OnInit {
  id!: string;
  building: Building = new Building();

  constructor(
    private buildingService: BuildingService,
    private ar: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.ar.snapshot.params['id'];
    this.viewBuilding();
  }

  viewBuilding(): void {
    this.buildingService.viewBuildings(this.id).subscribe({
      next: (data) => {
        this.building = data;
        console.log(data);
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error('Error fetching building:', error);
      }
    });
  }

  viewProjects(id: string): void {
    this.router.navigate(['viewprojects', id]);
  }
}
