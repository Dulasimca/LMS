import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'primeng/api';
import { ResponseMessage } from 'src/app/CommonModules/message-constants';
import { PathConstants } from 'src/app/CommonModules/pathconstants';
import { RestApiService } from 'src/app/Services/rest-api.service';

@Component({
  selector: 'app-languagemaster',
  templateUrl: './languagemaster.component.html',
  styleUrls: ['./languagemaster.component.css']
})
export class LanguagemasterComponent implements OnInit {
  languagename:any;
  selectedType:any;
  cols:any;
  data:any[] = [];
  languageid:any;
  responseMsg: Message[] = [];
  loading:any;
  @ViewChild('f', {static: false}) _respondentForm!: NgForm;
  constructor(private restapiservice: RestApiService) { }

  ngOnInit(): void {
    this.languageid=0;
    this.cols = [
      { field:'v_languagename', header: 'Language', align: 'left !important' },
      { field:'v_flag', header: 'status', align: 'left !important' }
    ]
  }
onSave(){
  if(this.languageid==0){
  const params = {
    'languageid': this.languageid,
    'languagename': this.languagename,
    'flag': (this.selectedType == 1) ? true : false
  };
  this.restapiservice.post(PathConstants.languagemaster_Post, params).subscribe(res => { })
  this.onView();
  this.onclear();
}
else{
  const params = {
    'languageid': this.languageid,
    'languagename': this.languagename,
    'flag': (this.selectedType == 1) ? true : false
  };
  this.restapiservice.post(PathConstants.updatelanguage_Post, params).subscribe(res => { })
}
}
onView(){
  this.restapiservice.get(PathConstants.languagemaster_Get).subscribe(res => {this.data = res.Table
  })
}
onEdit(rowData:any){
  this.languageid = rowData.v_languageid;
  this.languagename = rowData.v_languagename;
  this.selectedType = (rowData.v_flag === 'Active') ? 1 : 0;
  console.log('hh',rowData.v_langugename);
}

onclear() {
  //this.languageid = 0;
  this.languagename = null;
  this.selectedType = null;
  
}
onCheck() {
  this.data.forEach(i => {
    if(i.v_languagename  === this.languagename ) {
      this.responseMsg = [{ severity: ResponseMessage.WarnSeverity, detail: 'languagename is already exist, Please input different name' }];
        this.languagename  = null;
    }
  })
}
}