import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-request',
  templateUrl: './student-request.component.html',
  styleUrls: ['./student-request.component.css']
})
export class StudentRequestComponent implements OnInit {

   
  firstname:any;
  registerNumber:any;
  gender:any;
  bookcategory:any;
  bookcategoryOptions:any;
  bookedition:any;
  bookeditionOptions:any;
  borrowdate:any;
  duedate:any;
  

  constructor() { }

  ngOnInit(): void {
  }
onSave(){

}
onView(){

}
}
