import { Component, OnInit } from '@angular/core';
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
  data:any;
 
  constructor(private restapiservice: RestApiService) { }

  ngOnInit(): void {
    this.cols = [
      { field:'v_langugename', header: 'Language', align: 'left !important' },
    ]
  }
onSave(){
  const params = {
    'languageid': 0,
    'languagename': this.languagename,
    'flag':true
  };
  this.restapiservice.post(PathConstants.languagemaster_Post, params).subscribe(res => { })
  this.onView();
  this.onclear();
}
onView(){
  this.restapiservice.get(PathConstants. languagemaster_Get).subscribe(res => {this.data = res.Table
  })
}
onEdit(row: any) {
  
}
onclear() {
  //this.languageid = 0;
  this.languagename = null;
  this.selectedType = null;
  
}}