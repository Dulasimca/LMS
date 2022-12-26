import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.items = [{
      label:'Master',
      items:[{
        label:'BOOKCATEGORYMASTER', routerLink: '/bookcategorymaster' },
{ label: 'COLLGEMASTER', routerLink: '/collegemaster'},
{ label: 'EDITIONMASTER', routerLink: '/editionmaster' },
{ label: 'LANGUAGEMASTER', routerLink: '/languagemaster' },
{ label: 'COURSEMASTER', routerLink: '/coursemaster'},
{ label: 'DEPARTMENTMASTER', routerLink: '/departmentmaster' },

      ]},
      {
        label:'Forms',
        items: [{label: 'BOOKADD',routerLink: '/bookadd' },
        {label: 'STUDENT-REQUEST',routerLink: '/student-request'},
      ]},
    ];
  }
onSave()
{
  this.router.navigate(['/dashboard']);
}
}
