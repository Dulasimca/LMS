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
  responseMsg: Message[] = [];

  @ViewChild('f', {static: false}) _respondentForm!: NgForm;
  bookcategoryid: any;
  
  constructor(private restapiservice: RestApiService) { }

  ngOnInit(): void {
    this.bookcategoryid=0;
    this.cols = [
      { field: 'v_bookcategoryname', header: 'bookcategoryname', align: 'left !important' },
      { field: 'v_flag', header: 'Status', align: 'left !important' }
    ]
  }
onSave(){
  if(this.bookcategoryid==0){
  const params = {
    'bookcategoryid': this.bookcategoryid,
    'bookcategoryname': this.bookCategory,
    'flag': (this.selectedType == 1) ? true : false
  };
  this.restapiservice.post(PathConstants.bookcategory_Post, params).subscribe(res => { })
  this.responseMsg = [{ severity: ResponseMessage.SuccessSeverity, detail: 'SuccessMessage' }];
}
else{
  const params = {
    'bookcategoryid': this.bookcategoryid,
    'bookcategoryname': this.bookCategory,
    'flag': (this.selectedType == 1) ? true : false
  };
  this.restapiservice.post(PathConstants.updatebookcategory_Post, params).subscribe(res => { })
  this.responseMsg = [{ severity: ResponseMessage.SuccessSeverity, detail: 'Successfully edit!!' }];
}}
onView(){
  this.restapiservice.get(PathConstants.categorymaster_Get).subscribe(res => {this.data = res.Table
  })
}
onEdit(rowData: any) {
  this.bookcategoryid=rowData.v_bookcategoryid;
  this.bookCategory=rowData.v_bookcategoryname;
  this.selectedType = (rowData.flag === 'Active') ? 1 : 0;
}
onCheck() {
  this.data.forEach( i => {
    if(i.v_bookcategoryname  == this.bookCategory ) {
      this.responseMsg = [{ severity: ResponseMessage.WarnSeverity, detail: 'bookcategoryname is already exist, Please input different name' }];
        this.bookCategory = null;
        console.log('jjh');
    }
  })
}
}


