import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'primeng/api';
import { ResponseMessage } from 'src/app/CommonModules/message-constants';
import { PathConstants } from 'src/app/CommonModules/pathconstants';

import { RestApiService } from 'src/app/Services/rest-api.service';

@Component({
  selector: 'app-collegemaster',
  templateUrl: './collegemaster.component.html',
  styleUrls: ['./collegemaster.component.css']
})
export class CollegemasterComponent implements OnInit {


  selectedType: any;
  cols: any;
  data: any[] = [];
  collegename: any;
  responseMsg: Message[] = [];
  collegeid: any;
  loading: any;

  @ViewChild('f', {static: false}) _respondentForm!: NgForm;

  constructor(private restapiservice: RestApiService) { }

  ngOnInit(): void {
    this.collegeid = 0;
    this.cols = [
      { field: 'v_collegename', header: 'Collegename', align: 'left !important' },
      { field: 'v_flag', header: 'Status', align: 'left !important' }
    ]
  }
  onSave() {
    if (this.collegeid == 0) {
      const params = {
        'collegeid': this.collegeid,
        'collegename': this.collegename,
        'flag': (this.selectedType == 1) ? true : false
      };
      this.restapiservice.post(PathConstants.CollegeMasterEntity_Post, params).subscribe(res => { })
      this.responseMsg = [{ severity: ResponseMessage.SuccessSeverity, detail: 'SuccessMessage' }];
    }
    else {
      const params = {
        'collegeid': this.collegeid,
        'collegename': this.collegename,
        'flag': (this.selectedType == 1) ? true : false
      };
      this.restapiservice.post(PathConstants.updatecollegemaster_Post, params).subscribe(res => {
      })
      this.responseMsg = [{ severity: ResponseMessage.SuccessSeverity, detail: 'Successfully edit!!' }];
    }
  }
  onView() {
    this.restapiservice.get(PathConstants.collegemaster_Get).subscribe(res => {
      this.data = res.Table
    })
  }
  onEdit(rowData: any) {
    this.collegeid = rowData.v_collegeid;
    this.collegename = rowData.v_collegename;
    this.selectedType = (rowData.flag === 'Active') ? 1 : 0;
  }
  onCheck() {
    this.data.forEach(i => {
      if (i.v_collegename === this.collegename) {
        this.responseMsg = [{ severity: ResponseMessage.WarnSeverity, detail: 'colleagename is already exist, Please input different name' }];
        this.collegename = null;
      }
    })
  }
}
