import { Component, OnInit } from '@angular/core';
import { PathConstants } from 'src/app/CommonModules/pathconstants';
import { RestApiService } from 'src/app/Services/rest-api.service';

@Component({
  selector: 'app-coursemaster',
  templateUrl: './coursemaster.component.html',
  styleUrls: ['./coursemaster.component.css']
})
export class CoursemasterComponent implements OnInit {
  coursename:any;
  selectedType:any;
  cols:any;
  data:any;
 courseid:any;
  constructor(private restapiservice: RestApiService) {
    this.cols = [
    { field:'v_coursename', header: 'Coursename', align: 'left !important' },
    { field:'v_flag',header:'Status',align: 'left !important'}
    ]
  }

  ngOnInit(): void {
  }
onSave(){ 
  if(this.courseid==0){
  const params = {
    'courseid': this.courseid,
    'coursename': this.coursename,
    'isactive': (this.selectedType == 1) ? true : false
  };
  this.restapiservice.post(PathConstants.coursemaster_Post, params).subscribe(res => {
})
}
else{
  const params = {
    'courseid': this.courseid,
    'coursename': this.coursename,
    'isactive': (this.selectedType == 1) ? true : false
  };
  this.restapiservice.post(PathConstants.updatecourse_Post, params).subscribe(res => {
  })
}
}
onView(){
  this.restapiservice.get(PathConstants.coursemaster_Get).subscribe(res => {this.data = res.Table
  })
}
onEdit(rowData:any){
this.courseid=rowData.v_courseid;
this.coursename=rowData.v_coursename;
this.selectedType = (rowData.isactive === 'Active') ? 1 : 0;
}
}
