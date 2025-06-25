import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';
import { StudentService } from '../../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editstudent.component',
  standalone: false,
  templateUrl: './editstudent.component.html',
  styleUrl: './editstudent.component.css'
})
export class EditstudentComponent implements OnInit {
  id!: string;
  student: Student = new Student();

  constructor(
    private studentService: StudentService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.student = new Student();

    this.studentService.getById(this.id).subscribe({
      next: (res) => {
        this.student = res;
        this.cdr.detectChanges();
      },
      error: (err) => {

      }
    })
  }

  updateStudent(){
    this.studentService.updateStudent(this.id, this.student).subscribe({
      next: (res) =>{
        this.router.navigate([''])
      },
      error: (err) => {

      }
    })
  }
 
}
