import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   public toggle: boolean = true;

   public sidenavToggle = new EventEmitter();

  ngOnInit(): void {
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit(this.toggle); //sends 'true' i.e) says menu to open in app component
    this.toggle = !this.toggle; //set toggle to 'false' after opening menu
  }
  onLogout() { 
  }
}
