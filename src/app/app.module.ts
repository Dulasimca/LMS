import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';

import { CalendarModule } from 'primeng/calendar';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookaddComponent } from './bookadd/bookadd.component';
import { FormsModule } from '@angular/forms';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { LibRegisterComponent } from './lib-register/lib-register.component';
import { StudentRequestComponent } from './student-request/student-request.component';
import { RestApiService } from './Services/rest-api.service';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { HeaderComponent } from './header/header.component';
import { LibPageComponent } from './lib-page/lib-page.component';



@NgModule({
  declarations: [
    AppComponent,
    BookaddComponent,
    StudentLoginComponent,
    StudentRegisterComponent,
    LibRegisterComponent,
    StudentRequestComponent,
    HeaderComponent,
    LibPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    RadioButtonModule,
    CalendarModule,
    SidebarModule,
    PanelMenuModule,
    HttpClientModule,
    TableModule
    
    
   
  ],
  providers: [RestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
