import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  registernumber: any;
  password: any;
  showPwd: boolean = false;
  // @ViewChild()
  constructor( private _router: Router) { }

  ngOnInit(): void {
   
  }

  onLogin() {
   
    this._router.navigate(['/header']);
  }

  onShowPwd() {
    // if (password.trim() !== '' && this.password !== null && this.password !== undefined) {
    //   this.showPwd = !this.showPwd;
    //   if (type === 0) {
    //     document.getElementById('pwd')?.setAttribute('value', this.password);
    //   } else {

    //   }
    // }
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
