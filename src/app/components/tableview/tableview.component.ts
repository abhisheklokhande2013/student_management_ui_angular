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
  page = 1;
  pageSize = 10;
  collectionSize = 0;

  // get students(): Student[] {
  //   return STUDENTS.map((country, i) => ({ id: i + 1, ...country })).slice(
  //     (this.page - 1) * this.pageSize,
  //     (this.page - 1) * this.pageSize + this.pageSize
  //   );
  // }

  constructor(private _router: Router, public studentService: StudentService) {}

  ngOnInit() {
    this.refreshStudentsList();
    // this.collectionSize = this.studentService.students.length;
  }

  refreshStudentsList() {
    this.studentService.getStudents().subscribe(
      (res: StudentData[]) => {
        // console.log(res);
        this.studentService.students = res;
      },
      error => {
        return console.log(error);
      }
    );
  }

  logout() {
    localStorage.removeItem("token");
    this._router.navigate(["/"]);
  }
}
