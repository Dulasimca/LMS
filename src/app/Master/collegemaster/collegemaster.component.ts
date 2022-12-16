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

  College:any;
  selectedType:any;
  cols:any;
  data:any;
  collegename: any;
  responseMsg: Message[] = [];

  @ViewChild('f', {static: false}) _respondentForm!: NgForm;

  constructor(private restapiservice: RestApiService) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'v_collegename', header: 'collegename', align: 'left !important' },
    ]
  }
onSave(){
  const params = {
    'collegeid': 0,
    'collegename': this.College,
  };
  this.restapiservice.post(PathConstants.CollegeMasterEntity_Post, params).subscribe(res => { })
 
  this.onclear();
}
onView(){
  this.restapiservice.get(PathConstants.collegemaster_Get).subscribe(res => {this.data = res.Table
  })
}
onEdit(row: any) {
}

onclear() {

  
}
onCheck() {
  this.data.forEach( (b: { collegename: any; })  => {
    if(b.collegename  === this.College ) {
      this.responseMsg = [{ severity: ResponseMessage.WarnSeverity, detail: 'casestatusname is already exist, Please input different name' }];
        this.College = null;
    }
  })
}
}
