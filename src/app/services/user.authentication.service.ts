import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

interface LoginResponse {
  status: string;
  message: string;
  data: {
    user: {
      _id: string;
      email: string;
      password: string;
      creation_dt: string;
    };
    token: string;
  };
}

@Injectable({
  providedIn: "root"
})
export class UserAuthenticationService {
  constructor(private _http: HttpClient) {}

  login(body: any) {
    return this._http.post<LoginResponse>(
      "http://localhost:8080/users/authenticate",
      body
    );
  }
}
