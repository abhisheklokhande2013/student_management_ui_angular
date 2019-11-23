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
  temp:StudentData = {_id: '1',roll_no: '123', name: 'Vivek', 
  address: 'Pune', degree:'BE',city: 'Amt', state: "MH",zip:'1111'};

  constructor(private http: HttpClient) {}

  public getToken(): string {
    return localStorage.getItem("token");
  }
  
  getStudents() {
    return this.http.get<StudentData[]>(this.endpoint + "/");
  }

  deleteStudent(id: string){
    return this.http.delete(this.endpoint + '/remove/' + id);
  }

  setStudent(student: StudentData){
    this.student = student;
  }

  getStudent(): StudentData{
    this.temp = {_id: this.student._id,roll_no: this.student.roll_no, name: this.student.name, 
    address: 'Pune', degree:this.student.degree,city: this.student.city, state: "MH",zip:'1111'};
    this.student = this.temp;
    return this.student;
  }

}
