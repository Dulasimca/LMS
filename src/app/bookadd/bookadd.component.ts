import { Component, OnInit } from '@angular/core';
import { RouterEvent } from '@angular/router';
import { PathConstants } from '../CommonModules/pathconstants';
import { RestApiService } from '../Services/rest-api.service';
@Component({
  selector: 'app-bookadd',
  templateUrl: './bookadd.component.html',
  styleUrls: ['./bookadd.component.css']
})
export class BookaddComponent implements OnInit {

  languageOptions:any;
  language: any;
  categoryOptions:any;
  category:any;
  editionOptions:any;
  edition:any;
  bookname:any;
  author:any;
  noCopies:any;
  shelf:any;
  dateOptions:any;
  date:any;
  remarks:any;
  cols:any;
  data: any;
  id:any;
  Languagedata: any;
  Editiondata: any;
  Categorydata: any;
  loading:any;
  constructor(private restapiservice: RestApiService) { }

  ngOnInit(): void {
    this.restapiservice.get(PathConstants.languagemaster_Get).subscribe(res => {
      this.Languagedata=res.Table;
    console.log("+++",this.Languagedata);
    })
    this.restapiservice.get(PathConstants.editionmaster_Get).subscribe(res => {this.Editiondata=res.Table})
    this.restapiservice.get(PathConstants.categorymaster_Get).subscribe(res => {this.Categorydata=res.Table})
    this.cols = [
      { field: 'v_languagename', header: 'Language', align: 'left !important' },
      { field: 'v_bookname', header: 'Bookname', align: 'right !important' },
      { field: 'v_author', header: 'Author', align: 'left !important' },
      { field: 'v_editionname', header: 'Edition', align: 'left !important' },
      { field: 'v_bookcategoryname', header: 'Bookcategory', align: 'left !important' },
      { field: 'v_publisheddate', header: 'Date', align: 'left !important' },
      { field: 'v_copies', header: 'Copies', align: 'left !important' },
      { field: 'v_remarks', header: 'Remarks', align: 'left !important' },
    ]
  }

  onSelect(type: any) {
    let languageSelection:any = [];
    let editionSelection:any = [];
    let bookcategorySelection:any =[];
    switch (type) {
      case 'L':
        this.Languagedata.forEach((c:any) => {
          languageSelection.push({ label: c.v_langugename, value: c.v_languageid });
        })
        this.languageOptions = languageSelection;
        this.languageOptions.unshift({ label: '-select', value: null });
        break;
          case 'B':
            this.Categorydata .forEach((c:any) => {
              bookcategorySelection.push({ label: c.v_bookcategoryname, value: c.v_bookcategoryid });
            })
            this.categoryOptions = bookcategorySelection;
            this.categoryOptions.unshift({ label: '-select', value: null });
            break;
            case 'E':
          this.Editiondata.forEach((c:any) => {
            editionSelection.push({ label: c.v_editionname, value: c.v_editionid });
          })
          this. editionOptions = editionSelection;
          this. editionOptions.unshift({ label: '-select', value: null });
          break;
    }
  }
  
onSave(){
    const params = {
      'bookid': 0,
      'languageid': this.language,
      'bookname': this.bookname,
      'author': this.author,
      'editionid': this.edition,
      'bookcategoryid':this.category,
      'publisheddate':this.date,
      'copies':this.noCopies,
      'remarks':this.remarks
    };
    this.restapiservice.post(PathConstants.book_Post, params).subscribe(res => { })
  }
    
onView(){
this.restapiservice.get(PathConstants.book_Get).subscribe(res => {this.data = res.Table
 })
}
onEdit(rowData:any){
  this.id=rowData.bookid;
  this.language=rowData.v_langaugeid;
  this.languageOptions = [{ label: rowData.v_languagename, value: rowData.v_langaugeid}];
  this.bookname=rowData.v_bookname;
  this.author=rowData.v_author;
  this.edition=rowData.v_editionid;
  this.editionOptions=[{label:rowData.v_editionname,value:rowData.v_editionid}]
  this.category=rowData.v_bookcategoryid;
  this.categoryOptions=[{label:rowData.v_bookcategoryname,value:rowData.v_bookcategoryid}]
  this.date=rowData.v_publisheddate;
  this.noCopies=rowData.v_copies;
  this.remarks=rowData.v_remarks;

}
}
