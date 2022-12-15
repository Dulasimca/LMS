import { Component, OnInit } from '@angular/core';
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
}
onView(){
  this.restapiservice.get(PathConstants.collegemaster_Get).subscribe(res => {this.data = res.Table
  })
}
onEdit( rowData:any){

}
}