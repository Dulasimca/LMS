import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookadd',
  templateUrl: './bookadd.component.html',
  styleUrls: ['./bookadd.component.css']
})
export class BookaddComponent implements OnInit {

  languageOptions:any;
  language: any;
  categoryOptions:any;
  category:any;
  editionOptions:any;
  edition:any;
  author:any;
  noCopies:any;
  shelf:any;
  dateOptions:any;
  date:any;
  remarks:any;

  constructor() { }

  ngOnInit(): void {
  }
onSave(){

}
onView(){

}
}
