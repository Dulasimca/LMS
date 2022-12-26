import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { ResponseMessage } from '../CommonModules/message-constants';
import { PathConstants } from '../CommonModules/pathconstants';
import { RestApiService } from '../Services/rest-api.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  email: any;
  password: any;
  showPwd: boolean = false;
  data: any[] = [];
  responseMsg: Message[] = [];

  @ViewChild('f', { static: false }) _respondentForm!: NgForm;
  constructor(private resApiService: RestApiService, private router: Router) { }
  ngOnInit(): void {
    this.resApiService.get(PathConstants.getlibrarienregister_Get).subscribe(res => {
      this.data = res.Table;
    })
  }
  onLogin() {
    this.data.forEach((i: any) => {
      if (
        i.v_email === this.email && i.v_password === this.password) {
        this.router.navigate(['/dashboard'])
      }
      else {
        this.responseMsg = [{ severity: ResponseMessage.ErrorSeverity, detail: 'Email is not correct, Please input correct email and password' }];
        console.log('no match');
      }
    })
  }


  onShowPwd() {
    var inputValue = (<HTMLInputElement>document.getElementById('pwd'));
    console.log('in', inputValue)
    if (inputValue.type === 'password') {
      inputValue.type = 'text';
      this.showPwd = !this.showPwd;
    } else {
      this.showPwd = !this.showPwd;
      inputValue.type = 'password';
    }
  }
}

