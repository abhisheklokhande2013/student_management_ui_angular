import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { StudentService } from "../../services/student.service";
import { StudentData } from "../../models/student.model";

@Component({
  selector: "app-tableview",
  templateUrl: "./tableview.component.html",
  styleUrls: ["./tableview.component.css"]
})
export class TableviewComponent implements OnInit {
  config: any;

  constructor(private _router: Router, public studentService: StudentService) {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: 0
    };
  }

  ngOnInit() {
    this.refreshStudentsList();
  }

  refreshStudentsList() {
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
          console.log(res);
          this.refreshStudentsList();
        },
        error => {
          return console.log(error);
        }
      );
    }
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  logout() {
    localStorage.removeItem("token");
    this._router.navigate(["/"]);
  }
}
