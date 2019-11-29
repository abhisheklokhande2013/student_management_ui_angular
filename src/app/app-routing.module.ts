import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule, CanActivate } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { TableviewComponent } from "./components/tableview/tableview.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "dash",
    component: TableviewComponent,
    canActivate: [AuthGuardService]
  },{
    path: "about",
    component: AboutComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
