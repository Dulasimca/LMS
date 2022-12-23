import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'primeng/api';
import { ResponseMessage } from '../CommonModules/message-constants';
import { PathConstants } from '../CommonModules/pathconstants';
import { RestApiService } from '../Services/rest-api.service';

@Component({
  selector: 'app-student-request',
  templateUrl: './student-request.component.html',
  styleUrls: ['./student-request.component.css']
})
export class StudentRequestComponent implements OnInit {
  firstname: any;
  registerNumber: any;
  gender: any;
  bookcategory: any;
  bookcategoryOptions: any;
  bookedition: any;
  bookeditionOptions: any;
  borrowdate: any;
  duedate: any;
  cols: any;
  data: any[] = [];
  selectedType: any;
  Editiondata: any;
  Categorydata: any;
  sno: any;
  responseMsg: Message[] = [];
  @ViewChild('f', { static: false }) _respondentForm!: NgForm;
  loading: any;


  constructor(private restapiservice: RestApiService) { }

  ngOnInit(): void {
    //this.bookid=0;

    this.restapiservice.get(PathConstants.editionmaster_Get).subscribe(res => { this.Editiondata = res.Table })
    this.restapiservice.get(PathConstants.categorymaster_Get).subscribe(res => { this.Categorydata = res.Table })
    this.cols = [
      { field: 'vfirstname', header: 'Name', align: 'left !important' },
      { field: 'vregno', header: 'Regno', align: 'right !important' },
      { field: 'vbookcategoryid', header: 'Bookcategory', align: 'left !important' },
      { field: 'veditionid', header: 'Edition', align: 'left !important' },
      { field: 'vborrowdate', header: 'Borrowdate', align: 'left !important' },
      { field: 'vduedate', header: 'Duedate', align: 'left !important' },

    ]
  }

  onSelect(type: any) {

    let editionSelection: any = [];
    let bookcategorySelection: any = [];
    switch (type) {
      case 'B':
        this.Categorydata.forEach((c: any) => {
          bookcategorySelection.push({ label: c.v_bookcategoryname, value: c.v_bookcategoryid });
        })
        this.bookcategoryOptions = bookcategorySelection;
        this.bookcategoryOptions.unshift({ label: '-select', value: null });
        break;
      case 'E':
        this.Editiondata.forEach((c: any) => {
          editionSelection.push({ label: c.v_editionname, value: c.v_editionid });
        })
        this.bookeditionOptions = editionSelection;
        this.bookeditionOptions.unshift({ label: '-select', value: null });
        break;
    }
  }


  onSave() {
    if (this.sno == 0) {
      const params = {
        'sno': this.sno,
        'firstname': this.firstname,
        'regno': this.registerNumber,
        'bookcategoryid': this.bookcategory,
        'editionid': this.bookedition,
        'borrowdate': this.borrowdate,
        'duedate': this.duedate,
      };
      this.restapiservice.post(PathConstants.StudentreqEntity_Post, params).subscribe(res => { })
    }
    else {
      const params = {
        'sno': this.sno,
        'firstname': this.firstname,
        'regno': this.registerNumber,
        'bookcategoryid': this.bookcategory,
        'editionid': this.bookedition,
        'borrowdate': this.borrowdate,
        'duedate': this.duedate,
      };
    } this.responseMsg = [{ severity: ResponseMessage.SuccessSeverity, detail: 'SuccessMessage' }];
  }

  onView() {
    this.restapiservice.get(PathConstants.Getstudentreq).subscribe(res => {
      this.data = res.Table
    })
  }
  onEdit(rowData: any) {
    this.sno = rowData.vsno;
    this.firstname = rowData.vfirstname;
    this.registerNumber = rowData.vregno;
    this.bookcategory = rowData.v_bookcategoryid;
    this.bookcategoryOptions = [{ label: rowData.v_bookcategoryname, value: rowData.v_bookcategoryid }];
    this.bookedition = rowData.v_editionid;
    this.bookeditionOptions = [{ label: rowData.v_editionname, value: rowData.v_editionid }];
    this.borrowdate = rowData.vborrowdate;
    this.duedate = rowData.vduedate;
  }

}
