import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  roleId: any;
  hostelCount: any;
  wardenCount: any;
  studentCount: any;
  totalStudent: any;
  expensesToday: any;
  expensesMonthly: any;

  constructor() { }

  ngOnInit(): void {
  }

}
