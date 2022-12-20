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
  
  constructor(private restapiservice: RestApiService) { }

  ngOnInit(): void {
    this.restapiservice.get(PathConstants.studentcount_Get,).subscribe(res => {this.data = res.Table[0].studentcount})
  }

}
