import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [{
      items: [{ label: 'DASHBOARD', routerLink: '/dashboard' }, { label: 'BOOKCATEGORYMASTER', routerLink: '/bookcategorymaster' }, { label: 'COLLGEMASTER', routerLink: '/collegemaster' },
      { label: 'COURSEMASTER', routerLink: '/coursemaster' }, { label: 'EDITIONMASTER', routerLink: '/editionmaster' },
      { label: 'LANGUAGEMASTER', routerLink: '/languagemaster' }, { label: 'DEPARTMENTMASTER', routerLink: '/departmentmaster' },
      { label: 'STUDENT-REQUEST', routerLink: '/student-request' }]

    }];
  }

}


 // items: [{label: 'BOOKADD',routerLink: '/bookadd' },{label: 'STUDENT-REQUEST',routerLink: '/student-request'},{}]

