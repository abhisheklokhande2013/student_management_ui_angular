import { Injectable } from "@angular/core";
import { StudentData } from "../models/student.model";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class StudentService {
  endpoint = "http://localhost:8080/students";
  students: StudentData[];
  selectedStudent: StudentData;
  student: StudentData;

  constructor(private http: HttpClient) {}

  public getToken(): string {
    return localStorage.getItem("token");
  }

  getStudents() {
    return this.http.get<StudentData[]>(this.endpoint + "/");
  }

  deleteStudent(id: string) {
    return this.http.delete(this.endpoint + "/remove/" + id);
  }

  createStudent(data: StudentData) {
    return this.http.post(this.endpoint + "/", data);
  }
  updateStudent(data: StudentData) {
    return this.http.put(this.endpoint + "/update/" + data._id, data);
  }
}
