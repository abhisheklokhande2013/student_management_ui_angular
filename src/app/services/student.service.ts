import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

interface LoginResponse {
  data: {
    token: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private _http: HttpClient) {}

  login(body: any) {
    console.log(body);
    return this._http.post<LoginResponse>(
      'http://localhost:8080/users/authenticate',
      body
    );
  }
}
