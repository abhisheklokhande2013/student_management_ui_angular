import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent implements OnInit {

  studentForm: FormGroup;
  submitted = false;
  constructor() { }

  ngOnInit() {
    this.studentForm = new FormGroup({
      rollno: new FormControl('', Validators.required),
      studentname: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      degree: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required)
    });
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
