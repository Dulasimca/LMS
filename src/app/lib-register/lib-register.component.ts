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
  cols: any;
  data: any;
  constructor(private resApiService : RestApiService)
   { }

   ngOnInit(): void {
    this.cols = [
      { field: 'v_username', header: 'UserName', align: 'left !important' },
      { field: 'v_email', header: 'Email', align: 'right !important' },
      { field: 'v_password', header: 'Passowrd', align: 'left !important' },
      { field: 'v_confirmpassword', header: 'Confirmpassword', align: 'left !important' },
      
    ]
  }
  onview() {
    
    this.resApiService.get(PathConstants.getlibrarienregister_Get).subscribe(res => { 
      this.data = res.Table; 
      console.log('enter',this.data)
    })

  }

  onSave() {
    console.log("==",this.email)
    const params = {
      'sno':this.id,
      'username': this.username,
      'email': this.email,
      'password': this.password,
      'confirmpassword': this.confirmpassword,
    }
    this.resApiService.post(PathConstants.librarienregister_Post, params).subscribe(res => { })
    this.onclear();
    
}
onEdit(rowData: any) {
  this.id = rowData.sno;
  this.username = rowData.v_username;
  this.email = rowData.v_email;
  this.password = rowData.v_password;
  this.confirmpassword = rowData.v_confirmpassword;
  
}
onclear() {
  this.id = null;
  this.username = null;
  this.email = null;
  this.password = null;
  this.confirmpassword= null;
 
}

}
