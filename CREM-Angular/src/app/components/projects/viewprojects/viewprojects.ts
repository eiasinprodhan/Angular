import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Project } from '../../../models/project.model';
import { ProjectService } from '../../../services/project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewprojects',
  standalone: false,
  templateUrl: './viewprojects.html',
  styleUrl: './viewprojects.css'
})
export class Viewprojects implements OnInit {
  id!: string;
  project: Project = new Project();

  constructor(
    private projectService: ProjectService,
    private ar: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.id = this.ar.snapshot.params['id'];
    this.viewProjects();
  }

  viewProjects(): void {
    this.projectService.viewProjects(this.id).subscribe({
      next: (data) => {
        this.project = data;
        console.log(data);
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  // Project Status Design
  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'planning':
        return 'bg-primary';
      case 'approved':
        return 'bg-info';
      case 'under construction':
        return 'bg-warning';
      case 'completed':
        return 'bg-success';
      default:
        return 'bg-danger';
    }
  }

}
