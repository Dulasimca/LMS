import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {
  
  firstname:any;
  lastname:any;
  registerNumber:any;
  gender:any;
  genderOptions:any;
  dob:any;
  age:any;
  address:any;
  pincode:any;
  collegename:any;
  collegenameOptions:any;
  course:any;
  courseOptions:any;
  department:any;
  departmentOptions:any;
  email:any;
  password:any;
  confirmpassword:any;

  constructor() { }

  ngOnInit(): void {
  }
onSave(){

}
onView(){

}
}
