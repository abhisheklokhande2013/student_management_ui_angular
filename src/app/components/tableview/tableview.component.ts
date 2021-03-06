import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { StudentService } from "../../services/student.service";
import { StudentData } from "../../models/student.model";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: "app-tableview",
  templateUrl: "./tableview.component.html",
  styleUrls: ["./tableview.component.css"]
})
export class TableviewComponent implements OnInit {
  config: any;

  constructor(
    public studentService: StudentService,
    private modalService: NgbModal,
    private toastr: NotificationService
  ) {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: 0
    };
  }

  ngOnInit() {
    this.refreshStudentsList();
  }

  public refreshStudentsList() {
    this.studentService.getStudents().subscribe(
      (res: StudentData[]) => {
        // console.log(res);
        this.studentService.students = res;
        this.config.totalItems = this.studentService.students.length;
      },
      error => {
        return console.log(error);
      }
    );
  }

  deleteStudent(student: StudentData): void {
    if (confirm("Are you sure to delete this record ?") === true) {
      this.studentService.deleteStudent(student._id).subscribe(
        res => {
          this.toastr.showSuccess("Record successfully deleted...");
          this.refreshStudentsList();
        },
        error => {
          this.toastr.showError(error);
          return console.log(error);
        }
      );
    }
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  openLg(content) {
    this.resetSelectedStudent();
    this.modalService.open(content, { size: "lg", centered:true });
  }

  editStudent(content, student: StudentData) {
    //console.log(student);
    this.resetSelectedStudent();
    this.studentService.selectedStudent._id = student._id;
    this.studentService.selectedStudent.city = student.city;
    this.studentService.selectedStudent.name = student.name;
    this.studentService.selectedStudent.roll_no = student.roll_no;
    this.studentService.selectedStudent.degree = student.degree;

    this.modalService.open(content, { size: "lg", centered:true });
  }

  resetSelectedStudent() {
    this.studentService.selectedStudent = {
      _id: "",
      name: "",
      roll_no: "",
      city: "",
      degree: ""
    };
  }
}
