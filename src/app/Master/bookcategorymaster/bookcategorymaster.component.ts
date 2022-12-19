import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'primeng/api';
import { ResponseMessage } from 'src/app/CommonModules/message-constants';
import { PathConstants } from 'src/app/CommonModules/pathconstants';
import { RestApiService } from 'src/app/Services/rest-api.service';

@Component({
  selector: 'app-bookcategorymaster',
  templateUrl: './bookcategorymaster.component.html',
  styleUrls: ['./bookcategorymaster.component.css']
})
export class BookcategorymasterComponent implements OnInit {
  bookCategory:any;
  selectedType:any;
  cols:any;
  data: any[] = [];
  languageid: any;
  responseMsg: Message[] = [];

  @ViewChild('f', {static: false}) _respondentForm!: NgForm;
  
  constructor(private restapiservice: RestApiService) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'v_bookcategoryname', header: 'bookcategoryname', align: 'left !important' },
      { field: 'v_flag', header: 'Status', align: 'left !important' }
    ]
  }
onSave(){
  const params = {
    'bookcategoryid': 0,
    'bookcategoryname': this.bookCategory,
  };
  this.restapiservice.post(PathConstants.Entity_Post, params).subscribe(res => { })
  this.onView();
        this.onclear();
}

onView(){
  this.restapiservice.get(PathConstants.categorymaster_Get).subscribe(res => {this.data = res.Table
  })
}
onEdit(row: any) {
 
}
onclear() {
  this.languageid = 0;
  this.bookCategory = null;
  this.selectedType = null;
  
}
onCheck() {
  this.data.forEach( i => {
    if(i.bookcategoryname  === this.bookCategory ) {
      this.responseMsg = [{ severity: ResponseMessage.WarnSeverity, detail: 'bookcategoryname is already exist, Please input different name' }];
        this.bookCategory = null;
    }
  })
}
}


