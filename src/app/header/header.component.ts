import { Component, EventEmitter, OnInit } from '@angular/core';
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
  router: any;

  ngOnInit(): void {
   
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit(this.toggle); //sends 'true' i.e) says menu to open in app component
    this.toggle = !this.toggle; //set toggle to 'false' after opening menu
  }
  onLogout() { 
    this.router.navigate(['/student_login']);
  }
}
