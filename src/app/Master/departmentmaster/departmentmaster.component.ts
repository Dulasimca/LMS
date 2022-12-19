import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ResponseMessage } from 'src/app/CommonModules/message-constants';
import { PathConstants } from 'src/app/CommonModules/pathconstants';
import { RestApiService } from 'src/app/Services/rest-api.service';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-departmentmaster',
  templateUrl: './departmentmaster.component.html',
  styleUrls: ['./departmentmaster.component.css']
})
export class DepartmentmasterComponent implements OnInit {

  College:any;
  selectedType:any;
  cols:any;
  data: any[] = [];
  DepartmentName: any;
  responseMsg: Message[] = [];
  
 
 
  constructor(private restapiservice: RestApiService) { }
  @ViewChild('f', {static: false}) _respondentForm!: NgForm;

  ngOnInit(): void {
    this.cols = [
      { field:'v_departmentname', header:'departmentname', align: 'left !important' },
    ]
  }
onSave(){
  const params = {
    'departmentid': 0,
    'departmentname': this.DepartmentName,
  };
  this.restapiservice.post(PathConstants.DepartmentMasterEntity_Post, params).subscribe(res => { })
  this.onView();
  this.onclear();
}
onView(){
 this.restapiservice.get(PathConstants.department_Get).subscribe(res => {this.data = res.Table
  })
}
onEdit(row: any) {
}
onclear() {
 
  
}

onCheck() {
  this.data.forEach(i => {
    if(i.departmentname  === this.DepartmentName ) {
      this.responseMsg = [{ severity: ResponseMessage.WarnSeverity, detail: 'colleagename is already exist, Please input different name' }];
        this.DepartmentName = null;
    }
  })
}
}
