import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'primeng/api';
import { Table } from 'primeng/table';
import { ResponseMessage } from '../CommonModules/message-constants';
import { PathConstants } from '../CommonModules/pathconstants';
import { RestApiService } from '../Services/rest-api.service';


@Component({
  selector: 'app-lib-register',
  templateUrl: './lib-register.component.html',
  styleUrls: ['./lib-register.component.css']
})
export class LibRegisterComponent implements OnInit {
  username: any;
  email: any;
  password: any;
  confirmpassword: any;
  id: any;
  loading: any;
  cols: any;
  data: any[] = [];
  showErrMsg: boolean | undefined;
  showMatchMsg!: boolean;
  disableSave: boolean = false;
  SpecialCharErrMsg: any;
  pswdStrongMsg: any;
  NumericErrMsg: any;
  UpperCaseErrMsg: any;
  LengthErrMsg: any;
  validatePassword: boolean = false;
  responseMsg: Message[] = [];
  
  constructor(private resApiService: RestApiService) { }
  @ViewChild('f', {static: false}) _respondentForm!: NgForm;

  ngOnInit(): void {
    this.cols = [
      { field: 'v_username', header: 'Username', align: 'left !important' },
      { field: 'v_email', header: 'Email', align: 'right !important' },
      { field: 'v_password', header: 'Password', align: 'left !important' },
      { field: 'v_confirmpassword', header: 'Confirmpassword', align: 'left !important' },

    ]
  }
  onview() {

    this.resApiService.get(PathConstants.getlibrarienregister_Get).subscribe(res => {
      this.data = res.Table;
     
    })

  }

  onSave() {
    console.log("==", this.email)
    const params = {
      'sno': this.id,
      'username': this.username,
      'email': this.email,
      'password': this.password,
      'confirmpassword': this.confirmpassword,
    }
    this.resApiService.post(PathConstants.librarienregister_Post, params).subscribe(res => { Table })
    this.onclear();
    this.onview();


  }
  onEdit(rowData: any) {
    this.id = 0;
    this.username = rowData.v_username;
    this.email = rowData.v_email;
    this.password = rowData.v_password;
    this.confirmpassword = rowData.v_confirmpassword;
  }
  onclear() {
    this.id = 0;
    this.username = null;
    this.email = null;
    this.password = null;
    this.confirmpassword = null;
  }
  
  checkPassword() {
    if (this.password !== undefined && this.password !== null && this.password.trim() !== '' &&
      this.confirmpassword !== undefined && this.confirmpassword !== null && this.confirmpassword.trim() !== '') {
      if (this.password.trim() !== this.confirmpassword.trim()) {
        this.showErrMsg = true;
        this.showMatchMsg = false;
        this.disableSave = false;
      } else {
        this.showErrMsg = false;
        this.showMatchMsg = true;
        this.disableSave = true;

      }
    } else {
      this.showErrMsg = false;
    }
  }

  check(password: any) {

    if (password.match(/[@$!%*?&]/g)) {
      this.SpecialCharErrMsg = false;
      this.validatePassword = true;

    } else {
      this.SpecialCharErrMsg = true;
      this.pswdStrongMsg = false;
      this.validatePassword = false;
    }
    if (password.match(/[0-9]/g)) {
      this.NumericErrMsg = false;
      this.validatePassword = true;
    } else {
      this.NumericErrMsg = true;
      this.pswdStrongMsg = false;
      this.validatePassword = false;

    }
    if (password.match(/[A-Z]/g)) {
      this.UpperCaseErrMsg = false;
      this.validatePassword = true;
    } else {
      this.UpperCaseErrMsg = true;
      this.pswdStrongMsg = false;
      this.validatePassword = false;
    }
    if (password.length >= 8) {
      this.LengthErrMsg = false;
      this.validatePassword = true;
    } else {
      this.LengthErrMsg = true;
      this.pswdStrongMsg = false;
      this.validatePassword = false;
    }
    if (password.match(/[@$!%*?&]/g) && password.match(/[0-9]/g) && password.match(/[A-Z]/g) && password.length > 8)
      this.pswdStrongMsg = true;
    // this.validatePassword=false;
  }

  onCheck() {
    this.data.forEach(i => {
      if(i.username  === this.username ) {
        this.responseMsg = [{ severity: ResponseMessage.WarnSeverity, detail: 'Username & emailId, Please input different name' }];
          this.username = null;
      }
    })
  }
  }
  

