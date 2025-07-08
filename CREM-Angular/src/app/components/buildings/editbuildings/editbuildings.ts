import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BuildingService } from '../../../services/building.service';
import { ProjectService } from '../../../services/project.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../../../models/project.model';
import { Building } from '../../../models/building.model';

@Component({
  selector: 'app-editbuildings',
  standalone: false,
  templateUrl: './editbuildings.html',
  styleUrl: './editbuildings.css'
})
export class Editbuildings implements OnInit {
  id!: string;
  building: Building = {
    id: '',
    name: '',
    type: '',
    project: new Project(),
    companyId: 0,
    floorCount: 0,
    unitCount: 0
  };

  projects: Project[] = [];
  message: string = '';
  messageType: string = '';

  constructor(
    private ar: ActivatedRoute,
    private buildingService: BuildingService,
    private projectService: ProjectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.ar.snapshot.params['id'];
    this.loadBuilding();
    this.loadProjects();
  }

  loadBuilding(): void {
    this.buildingService.viewBuildings(this.id).subscribe({
      next: (data) => {
        this.building = data;
      },
      error: (err) => {
        console.error(err);
        this.message = 'Failed to load building.';
        this.messageType = 'danger';
      }
    });
  }

  loadProjects(): void {
    this.projectService.listProjects().subscribe({
      next: (data) => {
        this.projects = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  updateBuilding(): void {
    this.buildingService.editBuildings(this.id, this.building).subscribe({
      next: () => {
        this.message = 'Building updated successfully!';
        this.messageType = 'success';
        setTimeout(() => this.router.navigate(['/listbuildings']), 1500);
      },
      error: (err) => {
        console.error(err);
        this.message = 'Update failed. Please try again.';
        this.messageType = 'danger';
      }
    });
  }
}
