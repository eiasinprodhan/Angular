import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../../services/projects/projects.service';

@Component({
  selector: 'app-viewprojects',
  standalone: false,
  templateUrl: './viewprojects.html',
  styleUrl: './viewprojects.css'
})
export class Viewprojects implements OnInit{
  projects!: any;

  constructor(
    private projectsService: ProjectsService,
  ) {}

  ngOnInit(): void {
    this.viewProjects()
  }

  

  viewProjects():void{
    this.projects = this.projectsService.viewProjects();
  }
}
