import { Component, OnInit } from '@angular/core';
import { PathConstants } from 'src/app/CommonModules/pathconstants';
import { RestApiService } from 'src/app/Services/rest-api.service';

@Component({
  selector: 'app-bookcategorymaster',
  templateUrl: './bookcategorymaster.component.html',
  styleUrls: ['./bookcategorymaster.component.css']
})
export class BookcategorymasterComponent implements OnInit {
  BookCategory:any;
  selectedType:any;
  cols:any;
  data:any;
 
  constructor(private restapiservice: RestApiService) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'v_bookcategoryname', header: 'bookcategoryname', align: 'left !important' },
    ]
  }
onSave(){
  const params = {
    'bookcategoryid': 0,
    'bookcategoryname': this.BookCategory,
  };
  this.restapiservice.post(PathConstants.Entity_Post, params).subscribe(res => { })
}
onView(){
  this.restapiservice.get(PathConstants.categorymaster_Get).subscribe(res => {this.data = res.Table
  })
}
onEdit( rowData:any){

}
}