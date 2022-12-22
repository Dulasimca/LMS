import { Component, OnInit } from '@angular/core';
import { PathConstants } from '../CommonModules/pathconstants';
import { RestApiService } from '../Services/rest-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data:any;
  data1:any;
  data2:any;
  test:any;
  constructor(private restapiservice: RestApiService) { }

  ngOnInit(): void {
    this.restapiservice.get(PathConstants.studentcount_Get,).subscribe(res => {this.data = res.Table[0].studentcount})
    this.restapiservice.get(PathConstants.BookCount_Get,).subscribe(res => {this.data1 = res.Table[0].bookcount})
    this.restapiservice.get(PathConstants.GetBookOut_Get,).subscribe(res => {this.data2 = res.Table[0].bookcountOut})
    this.restapiservice.get(PathConstants.GetLibrarienCount_Get,).subscribe(res => {this.test= res.Table[0].bookcountOut})
  }

}
