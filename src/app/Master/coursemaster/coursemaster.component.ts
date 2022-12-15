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
 
  constructor(private restapiservice: RestApiService) {
    this.cols = [
    { field:'v_coursename', header: 'Coursename', align: 'left !important' }
    ]
  }

  ngOnInit(): void {
  }
onSave(){
  const params = {
    'courseid': 0,
    'coursename': this.coursename,
    'flag':true
  };
  this.restapiservice.post(PathConstants.coursemaster_Post, params).subscribe(res => {
})
}
onView(){
  this.restapiservice.get(PathConstants.coursemaster_Get).subscribe(res => {this.data = res.Table
  })
}
onEdit(rowData:any){

}
}
