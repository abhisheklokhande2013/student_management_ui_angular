import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { TableviewComponent } from "./components/tableview/tableview.component";
import { StudentformComponent } from "./components/studentform/studentform.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";
import { JwtModuleOptions, JwtModule } from "@auth0/angular-jwt";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptor } from "./services/token.interceptor";

export function tokenGetter() {
  return localStorage.getItem("token");
}

const JWT_Module_Options: JwtModuleOptions = {
  config: {
    tokenGetter: tokenGetter,
    whitelistedDomains: ["localhost:4200", "localhost:8080"]
  }
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableviewComponent,
    StudentformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    JwtModule.forRoot(JWT_Module_Options)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
