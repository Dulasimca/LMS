import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];
   public toggle: boolean = true;
   public sidenavToggle = new EventEmitter();
  
  
   constructor( private _router: Router) { }


  ngOnInit(): void {
   
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit(this.toggle); //sends 'true' i.e) says menu to open in app component
    this.toggle = !this.toggle; //set toggle to 'false' after opening menu
  }
  onLog() { 
    this._router.navigate(['/student_login']);
  }
   }

    
