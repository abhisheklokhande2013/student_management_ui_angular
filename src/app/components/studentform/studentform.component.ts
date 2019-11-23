import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent implements OnInit {

  studentForm: FormGroup;
  submitted = false;
  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentForm = new FormGroup({
      roll_no: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      degree: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
      _id: new FormControl()
    });
    this.studentForm.setValue(this.studentService.getStudent());
  }

  get f() {
    return this.studentForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.studentForm.invalid) {
      return;
    }
    alert('Success !');
  }
}
