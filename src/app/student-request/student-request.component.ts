import { Component, OnInit } from '@angular/core';
import { PathConstants } from '../CommonModules/pathconstants';
import { RestApiService } from '../Services/rest-api.service';

@Component({
  selector: 'app-student-request',
  templateUrl: './student-request.component.html',
  styleUrls: ['./student-request.component.css']
})
export class StudentRequestComponent implements OnInit {
  firstname:any;
  registerNumber:any;
  gender:any;
  bookcategory:any;
  bookcategoryOptions:any;
  bookedition:any;
  bookeditionOptions:any;
  borrowdate:any;
  duedate:any;
  cols:any;
  data: any[] = [];
  selectedType:any;
  Editiondata: any;
  Categorydata: any;
  sno:any;

  

  constructor(private restapiservice: RestApiService) { }

  ngOnInit(): void {
    
    this.restapiservice.get(PathConstants.editionmaster_Get).subscribe(res => {this.Editiondata=res.Table})
    this.restapiservice.get(PathConstants.categorymaster_Get).subscribe(res => {this.Categorydata=res.Table})
   
  }

  onSelect(type: any) {
   
    let editionSelection:any = [];
    let bookcategorySelection:any =[];
    switch (type) {
    
          case 'B':
            this.Categorydata.forEach((c:any) => {
              bookcategorySelection.push({ label: c.v_bookcategoryname, value: c.v_bookcategoryid });
            })
            this.bookcategoryOptions = bookcategorySelection;
            this.bookcategoryOptions.unshift({ label: '-select', value: null });
            break;
            case 'E':
          this.Editiondata.forEach((c:any) => {
            editionSelection.push({ label: c.v_editionname, value: c.v_editionid });
          })
          this. bookeditionOptions = editionSelection;
          this. bookeditionOptions.unshift({ label: '-select', value: null });
          break;
    }
  }
  

onSave(){
    const params = {
      'sno': this.sno,
      'firstname': this.firstname,
      'regno':this.registerNumber,
      'bookcategoryid':this.bookcategory,
      'editionid':this.bookedition,
      'borrowdate':this.borrowdate,
      'duedate':this.duedate,
    };
    this.restapiservice.post(PathConstants.StudentreqEntity_Post, params).subscribe(res => { }) 

  }



onView(){

}
onEdit(rowData: any) {

}
}
