import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LMS';
  hidemenu:boolean=true;
  hideheader:boolean=true;
  constructor(private router:Router){
    this.router.events.subscribe((events)=> {
     if(events instanceof NavigationEnd){
       if((events.url ==='/header')||(events.url ==='/collegemaster')||(events.url ==='/bookadd')||(events.url==='/bookcategorymaster')||(events.url ==='/coursemaster')||(events.url ==='/departmentmaster')||(events.url ==='/editionmaster')||(events.url==='/languagemaster')||(events.url==='/student-request')||(events.url ==='/dashboard')) {
         this.hidemenu=false;
       }
       else{
         this.hidemenu=true;
       }
     }
   })
  
  this.router.events.subscribe((events)=> {
    if(events instanceof NavigationEnd){
      if((events.url ==='/bookadd')||(events.url ==='/coursemaster')||(events.url === '/collegemaster')||(events.url==='/bookcategorymaster')||(events.url ==='/departmentmaster')||(events.url ==='/editionmaster')||(events.url==='/languagemaster')||(events.url==='/student-request')||(events.url === '/')) {
        this.hideheader=false;
      }
      else{
        this.hideheader=true;
      }
    }
  })}}