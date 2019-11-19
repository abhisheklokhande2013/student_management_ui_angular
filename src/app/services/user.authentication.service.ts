import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";
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
  constructor(private _http: HttpClient, public jwtHelper: JwtHelperService) {}

  login(body: any) {
    return this._http.post<LoginResponse>(
      "http://localhost:8080/users/authenticate",
      body
    );
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem("token");
    // Check whether the token is expired and return true or false
    return !this.jwtHelper.isTokenExpired(token);
  }
}
