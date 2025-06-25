import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';
import { Student } from '../../models/student.model';
import { error } from 'console';

@Component({
  selector: 'app-addstudent.component',
  standalone: false,
  templateUrl: './addstudent.component.html',
  styleUrl: './addstudent.component.css'
})
export class AddstudentComponent implements OnInit{
  formGroup!: FormGroup;

  constructor(
    private studentService: StudentService,
    private formBuilder: FormBuilder,
    private router: Router
  ){}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name:[''],
      class:['']
    })
  }

  saveStudent():void{
    const student: Student = {...this.formGroup.value};

    this.studentService.addStudent(student).subscribe({
      next: (res) => {
        this.formGroup.reset();
        this.router.navigate(['']);
      },
      error: (error) => {

      }
    })
  }

}
