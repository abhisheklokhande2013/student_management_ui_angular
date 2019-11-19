import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import { UserAuthenticationService } from "../../services/user.authentication.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  user: any;
  loginError = false;

  constructor(
    private _myservice: UserAuthenticationService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(data) {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    if (this.loginForm.valid) {
      this.user = {
        email: data.username,
        password: data.password
      };

      this._myservice.login(this.user).subscribe(
        data => {
          if (data.status === "success") {
            localStorage.setItem("token", data.data.token);
            this._router.navigate(["/dash"]);
          } else {
            this.loginError = true;
            console.log(data.message);
          }
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
