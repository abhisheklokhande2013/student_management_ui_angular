import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import { StudentService } from "src/app/services/student.service";
import { StudentData } from "../../models/student.model";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { TableviewComponent } from "../tableview/tableview.component";

@Component({
  selector: "app-studentform",
  templateUrl: "./studentform.component.html",
  styleUrls: ["./studentform.component.css"]
})
export class StudentformComponent implements OnInit {
  studentForm: FormGroup;
  submitted = false;
  StudentFormError: any;
  error: any;

  constructor(
    private studentService: StudentService,
    private modalService: NgbModal,
    private parent: TableviewComponent
  ) {}

  ngOnInit() {
    this.studentForm = new FormGroup({
      roll_no: new FormControl("", Validators.required),
      name: new FormControl("", Validators.required),
      degree: new FormControl("", Validators.required),
      city: new FormControl("", Validators.required),
      _id: new FormControl()
    });
    //console.log(this.studentService.selectedStudent);
    this.studentForm.setValue(this.studentService.selectedStudent);
  }

  get f() {
    return this.studentForm.controls;
  }

  onSubmit(data: StudentData) {
    this.submitted = true;
    if (this.studentForm.invalid) {
      return;
    }
    //console.log(data);
    if (data._id) {
      //Update student record

      if (
        this.studentForm.controls.roll_no.dirty ||
        this.studentForm.controls.name.dirty ||
        this.studentForm.controls.degree.dirty ||
        this.studentForm.controls.city.dirty
      ) {
        this.studentService.updateStudent(data).subscribe(res => {
          console.log(res);
          this.parent.refreshStudentsList();
          this.modalService.dismissAll();
        });
      } else {
        this.error = "Nothing has changed...";
        this.StudentFormError = true;
      }
    } else {
      //Create new student record
      this.studentService.createStudent(data).subscribe(res => {
        this.studentForm.reset();
        console.log(res);
        this.parent.refreshStudentsList();
        this.modalService.dismissAll();
      });
    }
  }
}
