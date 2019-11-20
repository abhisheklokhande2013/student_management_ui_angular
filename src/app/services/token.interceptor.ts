import { Injectable } from "@angular/core";
import { StudentService } from "./student.service";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public studentService: StudentService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        "x-access-token": `${this.studentService.getToken()}`
      }
    });
    //console.log(request);
    return next.handle(request);
  }
}
