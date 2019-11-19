import { Component } from "@angular/core";
import { Router } from "@angular/router";
interface Student {
  id?: number;
  name: string;
  city: string;
  degree: string;
  adress: string;
  state: string;
  zip: number;
}

const STUDENTS: Student[] = [
  {
    name: "Abhishek Lokhande",
    city: "Amravati",
    degree: "M. Tech",
    adress: "Kothrud",
    state: "MH",
    zip: 444333
  },
  {
    name: "Abhishek Lokhande",
    city: "Amravati",
    degree: "M. Tech",
    adress: "Kothrud",
    state: "MH",
    zip: 444333
  },
  {
    name: "Abhishek Lokhande",
    city: "Amravati",
    degree: "M. Tech",
    adress: "Kothrud",
    state: "MH",
    zip: 444333
  },
  {
    name: "Abhishek Lokhande",
    city: "Amravati",
    degree: "M. Tech",
    adress: "Kothrud",
    state: "MH",
    zip: 444333
  },
  {
    name: "Abhishek Lokhande",
    city: "Amravati",
    degree: "M. Tech",
    adress: "Kothrud",
    state: "MH",
    zip: 444333
  },
  {
    name: "Abhishek Lokhande",
    city: "Amravati",
    degree: "M. Tech",
    adress: "Kothrud",
    state: "MH",
    zip: 444333
  },
  {
    name: "Abhishek Lokhande",
    city: "Amravati",
    degree: "M. Tech",
    adress: "Kothrud",
    state: "MH",
    zip: 444333
  },
  {
    name: "Abhishek Lokhande",
    city: "Amravati",
    degree: "M. Tech",
    adress: "Kothrud",
    state: "MH",
    zip: 444333
  },
  {
    name: "Abhishek Lokhande",
    city: "Amravati",
    degree: "M. Tech",
    adress: "Kothrud",
    state: "MH",
    zip: 444333
  },
  {
    name: "Abhishek Lokhande",
    city: "Amravati",
    degree: "M. Tech",
    adress: "Kothrud",
    state: "MH",
    zip: 444333
  },
  {
    name: "Abhishek Lokhande",
    city: "Amravati",
    degree: "M. Tech",
    adress: "Kothrud",
    state: "MH",
    zip: 444333
  },
  {
    name: "Abhishek Lokhande",
    city: "Amravati",
    degree: "M. Tech",
    adress: "Kothrud",
    state: "MH",
    zip: 444333
  },
  {
    name: "Abhishek Lokhande",
    city: "Amravati",
    degree: "M. Tech",
    adress: "Kothrud",
    state: "MH",
    zip: 444333
  },
  {
    name: "Abhishek Lokhande",
    city: "Amravati",
    degree: "M. Tech",
    adress: "Kothrud",
    state: "MH",
    zip: 444333
  },
  {
    name: "Abhishek Lokhande",
    city: "Amravati",
    degree: "M. Tech",
    adress: "Kothrud",
    state: "MH",
    zip: 444333
  },
  {
    name: "Abhishek Lokhande",
    city: "Amravati",
    degree: "M. Tech",
    adress: "Kothrud",
    state: "MH",
    zip: 444333
  },
  {
    name: "Abhishek Lokhande",
    city: "Amravati",
    degree: "M. Tech",
    adress: "Kothrud",
    state: "MH",
    zip: 444333
  },
  {
    name: "Abhishek Lokhande",
    city: "Amravati",
    degree: "M. Tech",
    adress: "Kothrud",
    state: "MH",
    zip: 444333
  },
  {
    name: "Abhishek Lokhande",
    city: "Amravati",
    degree: "M. Tech",
    adress: "Kothrud",
    state: "MH",
    zip: 444333
  },
  {
    name: "Abhishek Lokhande",
    city: "Amravati",
    degree: "M. Tech",
    adress: "Kothrud",
    state: "MH",
    zip: 444333
  },
  {
    name: "Abhishek Lokhande",
    city: "Amravati",
    degree: "M. Tech",
    adress: "Kothrud",
    state: "MH",
    zip: 444333
  }
];

@Component({
  selector: "app-tableview",
  templateUrl: "./tableview.component.html",
  styleUrls: ["./tableview.component.css"]
})
export class TableviewComponent {
  page = 1;
  pageSize = 10;
  collectionSize = STUDENTS.length;

  get students(): Student[] {
    return STUDENTS.map((country, i) => ({ id: i + 1, ...country })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }
  constructor(private _router: Router) {}

  logout() {
    localStorage.removeItem("token");
    this._router.navigate(["/"]);
  }
}
