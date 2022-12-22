import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'primeng/api';
import { ResponseMessage } from 'src/app/CommonModules/message-constants';
import { PathConstants } from 'src/app/CommonModules/pathconstants';
import { RestApiService } from 'src/app/Services/rest-api.service';

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
  departmentName: any;
  departmentid:any;
  responseMsg: Message[] = [];
 @ViewChild('f', {static: false}) _respondentForm!: NgForm;
  loading:any;
  constructor(private restapiservice: RestApiService) { }

  ngOnInit(): void {
    this.departmentid=0;
    this.cols = [
      { field:'v_departmentname', header:'Departmentname', align: 'left !important' },
      { field:'v_flag', header:'Status', align: 'left !important' }
    ]
  }
onSave(){
  if(this.departmentid==0){
  const params = {
    'departmentid': this.departmentid,
    'departmentname': this.departmentName,
    'flag': (this.selectedType == 1) ? true : false
  };
  this.restapiservice.post(PathConstants.DepartmentMasterEntity_Post, params).subscribe(res => { })
}
else{
  const params = {
    'departmentid': this.departmentid,
    'departmentname': this.departmentName,
    'flag': (this.selectedType == 1) ? true : false,
  };
  this.restapiservice.post(PathConstants.updatedepartment_Post, params).subscribe(res => { })
}
}
onView(){
 this.restapiservice.get(PathConstants.department_Get).subscribe(res => {this.data = res.Table
  })
}
onEdit(rowData: any) {
  this.departmentid=rowData.v_departmentid;
  this.departmentName=rowData.v_departmentname;
  this.selectedType = (rowData.flag === 'Active') ? 1 : 0;
}
onCheck() {
  this.data.forEach(i => {
    if(i.v_departmentname  === this.departmentName ) {
      this.responseMsg = [{ severity: ResponseMessage.WarnSeverity, detail: 'editionname is already exist, Please input different name' }];
        this.departmentName = null;
    }
  })
}
}