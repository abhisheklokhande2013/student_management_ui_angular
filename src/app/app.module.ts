import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TableviewComponent } from './components/tableview/tableview.component';
import { StudentformComponent } from './components/studentform/studentform.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableviewComponent,
    StudentformComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,  ReactiveFormsModule, FormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
