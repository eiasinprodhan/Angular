import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showstudent.component',
  standalone: false,
  templateUrl: './showstudent.component.html',
  styleUrl: './showstudent.component.css'
})
export class ShowstudentComponent implements OnInit{
  students: any;

  constructor(
    private studentService: StudentService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this. loadAllStudents();
  }

  loadAllStudents():void{
    this.students = this.studentService.showAllStudent();
  }

  getById(id: string){
    this.router.navigate(['editstudent', id]);
  }

  deleteStudent(id: string):void{
    this.studentService.deleteStudent(id).subscribe({
      next: (response) => {
        console.log(response);
        this.loadAllStudents();
        this.cdr.reattach();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
