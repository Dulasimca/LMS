import { Component, OnInit } from '@angular/core';
import { PathConstants } from '../CommonModules/pathconstants';
import { RestApiService } from '../Services/rest-api.service';

@Component({
  selector: 'app-lib-register',
  templateUrl: './lib-register.component.html',
  styleUrls: ['./lib-register.component.css']
})
export class LibRegisterComponent implements OnInit {
  username:any;
  email: any;
  password:any;
  confirmpassword:any;
  id:any;
  
  constructor(private resApiService : RestApiService)
   { }

  ngOnInit(): void {
  }
  onSave() {
    console.log("==",this.email)
    const params = {
      'sno': this.id,
      'username': this.username,
      'email': this.email,
      'password': this.password,
      'confirmpassword': this.confirmpassword,
    }
    this.resApiService.post(PathConstants.librarienregister_Post, params).subscribe(res => { })
    
}

}
