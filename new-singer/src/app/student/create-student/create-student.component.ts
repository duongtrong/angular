import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import {StudentService} from '../student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  students: Student = new Student();
  submitted = false;

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit() {
  }

  newStudent(): void {
    this.submitted = false;
    this.students = new Student();
  }

  save() {
    this.studentService.createStudent(this.students)
      .subscribe(data => console.log(data), error => console.log(error));
    this.students = new Student();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/students']);
  }

}
