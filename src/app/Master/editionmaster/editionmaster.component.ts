import { Component, OnInit } from '@angular/core';
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
  data:any;
 
  constructor(private restapiservice: RestApiService) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'v_editionname', header: 'Edition', align: 'left !important' }
    ]
  }
onSave()
{
  const params = {
    'editionid': 0,
    'editionname': this.editionname,
    'flag':true
  };
  this.restapiservice.post(PathConstants.editionmaster_Post, params).subscribe(res => {
    
   })
   this.onView();
   this.onclear();
}
onView(){
  this.restapiservice.get(PathConstants.editionmaster_Get).subscribe(res => {this.data = res.Table
  })

}
onEdit(row: any) {
}
 onclear() {
  //this.editionid = 0;
  this.editionname = null;
  this.selectedType = null;
  
}}