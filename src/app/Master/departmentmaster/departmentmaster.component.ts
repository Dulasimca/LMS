import { Component, OnInit } from '@angular/core';
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
  data:any;
  Department: any;
 
  constructor(private restapiservice: RestApiService) { }

  ngOnInit(): void {
    this.cols = [
      { field:'v_departmentname', header:'departmentname', align: 'left !important' },
    ]
  }
onSave(){
  const params = {
    'departmentid': 0,
    'departmentname': this.Department,
  };
  this.restapiservice.post(PathConstants.DepartmentMasterEntity_Post, params).subscribe(res => { })
}
onView(){
 this.restapiservice.get(PathConstants.department_Get).subscribe(res => {this.data = res.Table
  })
}
onEdit( rowData:any){

}
}