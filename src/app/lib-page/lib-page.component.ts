import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lib-page',
  templateUrl: './lib-page.component.html',
  styleUrls: ['./lib-page.component.css']
})
export class LibPageComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.router.navigate(['/student_login']);
  
  }
}