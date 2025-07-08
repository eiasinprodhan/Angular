import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from '../../../models/project.model';
import { BuildingService } from '../../../services/building.service';
import { ProjectService } from '../../../services/project.service';


@Component({
  selector: 'app-addbuildings',
  standalone: false,
  templateUrl: './addbuildings.html',
  styleUrl: './addbuildings.css'
})
export class Addbuildings implements OnInit {
  addBuildingForm!: FormGroup;
  projects: Project[] = [];

  message: string = '';
  messageType: string = '';

  constructor(
    private buildingService: BuildingService,
    private projectService: ProjectService,
    private formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.addBuildingForm = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      project: this.formBuilder.group(
        {
          id: [''],
          name: [''],
          location: [''],
          startDate: [''],
          endDate: [''],
          budget: [0],
          status: [''],
          projectType: [''],
          projectManager: [''],
          description: ['']
        }
      ),
      companyId: [null, [Validators.required, Validators.min(1)]],
      floorCount: [null, [Validators.required, Validators.min(1)]],
      unitCount: [null, [Validators.required, Validators.min(1)]]
    });

    this.listProjects();

    this.addBuildingForm.get('project')?.get('id')?.valueChanges.subscribe(id => {
      const selectedProject = this.projects.find(p => p.id === id);
      if (selectedProject) {
        this.addBuildingForm.patchValue({ project: selectedProject })
      }
    }
    )
  }

  addBuildings(): void {
    if (this.addBuildingForm.invalid) {
      this.addBuildingForm.markAllAsTouched();
      return;
    }

    this.buildingService.addBuildings(this.addBuildingForm.value).subscribe({
      next: () => {
        this.message = 'Building added successfully!';
        this.messageType = 'success';
        this.addBuildingForm.reset();
      },
      error: (err) => {
        this.message = 'Failed to add building. Please try again.';
        this.messageType = 'danger';
        console.error(err);
      }
    });
  }

  listProjects(): void {
    this.projectService.listProjects().subscribe({
      next: (res) => {
        this.projects = res;
        console.log(res);
        this.cdr.reattach();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }



}
