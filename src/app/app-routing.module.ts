import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookaddComponent } from './bookadd/bookadd.component';
import { HeaderComponent } from './header/header.component';
import { LibPageComponent } from './lib-page/lib-page.component';
import { LibRegisterComponent } from './lib-register/lib-register.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { StudentRequestComponent } from './student-request/student-request.component';


const routes: Routes = [
  {path:'bookadd',component: BookaddComponent},
  {path:'student_login',component:StudentLoginComponent},
  {path:'student-register',component:StudentRegisterComponent},
  {path:'lib-register',component:LibRegisterComponent},
  {path:'student-request',component:StudentRequestComponent},
  {path:'header',component:HeaderComponent},
  {path:'lib_page',component:LibPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
