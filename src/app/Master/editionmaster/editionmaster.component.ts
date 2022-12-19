import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'primeng/api';
import { ResponseMessage } from 'src/app/CommonModules/message-constants';
import { PathConstants } from 'src/app/CommonModules/pathconstants';
import { RestApiService } from 'src/app/Services/rest-api.service';

@Component({
  selector: 'app-editionmaster',
  templateUrl: './editionmaster.component.html',
  styleUrls: ['./editionmaster.component.css']
})
export class EditionmasterComponent implements OnInit {
  editionname:any;
  selectedType:any;
  cols:any;
  data: any[] = [];
  editionid:any;
  responseMsg: Message[] = [];
  constructor(private restapiservice: RestApiService) { }
  @ViewChild('f', {static: false}) _respondentForm!: NgForm;


  ngOnInit(): void {
    this.editionid=0;
    this.cols = [
      { field:'v_editionname', header: 'Edition', align: 'left !important' },
      { field:'v_flag',header:'Status',align:'left !important'}
    ]
  }
onSave()
{
  if(this.editionid==0){
    const params = {
      'editionid': this.editionid,
      'editionname': this.editionname,
      'isactive': (this.selectedType == 1) ? true : false
    };
  this.restapiservice.post(PathConstants.editionmaster_Post, params).subscribe(res => {
    
   })
  }
   else{
    const params = {
      'editionid': this.editionid,
      'editionname': this.editionname,
      'isactive': (this.selectedType == 1) ? true : false
    };
    this.restapiservice.post(PathConstants.updateedition_Post, params).subscribe(res => { })
  }
}
onView(){
  this.restapiservice.get(PathConstants.editionmaster_Get).subscribe(res => {this.data = res.Table
  })
}
onEdit(rowData:any){
this.editionid = rowData.v_editionid;
this.editionname = rowData.v_editionname;
this.selectedType = (rowData.isactive === 'Active') ? 1 : 0;
}

 onclear() {
  //this.editionid = 0;
  this.editionname = null;
  this.selectedType = null;
  
}
onCheck() {
  this.data.forEach(i => {
    if(i.editionname  === this.editionname ) {
      this.responseMsg = [{ severity: ResponseMessage.WarnSeverity, detail: 'colleagename is already exist, Please input different name' }];
        this.editionname = null;
    }
  })
}
}
