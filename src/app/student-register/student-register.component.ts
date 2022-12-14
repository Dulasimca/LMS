import { Component, OnInit } from '@angular/core';
import { PathConstants } from '../CommonModules/pathconstants';
import { RestApiService } from '../Services/rest-api.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {
  
  firstname:any;
  lastname:any;
  registerNumber:any;
  gender:any;
  genderOptions:any;
  dob:any = Date;
  age:any;
  address:any;
  pincode:any;
  collegename:any;
  collegenameOptions:any;
  course:any;
  courseOptions:any;
  department:any;
  departmentOptions:any;
  email:any;
  password:any;
  confirmpassword:any;
  id:any;
  data: any;
  cols:any;
  Genderdata: any;
  Collegedata: any;
  Coursedata: any;
  Departmentdata:any;
  dataofbirth: any;
  showErrMsg: boolean | undefined;
  showMatchMsg!:boolean;
  disableSave: boolean=false;
  SpecialCharErrMsg: any;
  pswdStrongMsg: any;
  NumericErrMsg: any;
  UpperCaseErrMsg: any;
  LengthErrMsg: any;
  validatePassword: boolean = false;
  pincode_max:any;

  constructor(private resApiService : RestApiService) { }

  ngOnInit(): void {
    this.resApiService.get(PathConstants.gendermaster_Get).subscribe(res => {
      this.Genderdata=res.Table;
    console.log("+++",this.Genderdata);
    })
    this.resApiService.get(PathConstants.collegemaster_Get).subscribe(res => {this.Collegedata=res.Table})
    this.resApiService.get(PathConstants.coursemaster_Get).subscribe(res => {this.Coursedata=res.Table})
    this.resApiService.get(PathConstants.department_Get).subscribe(res => {this.Departmentdata=res.Table})
    this.cols = [
      { field: 'vfirstname', header: 'Firstname', align: 'left !important' },
      { field: 'vlastname', header: 'Lastname', align: 'right !important' },
      { field: 'vregno', header: 'Regno', align: 'left !important' },
      { field: 'vgendername', header: 'Gender', align: 'left !important' },
      { field: 'vdob', header: 'DOB', align: 'left !important' },
      { field: 'vage', header: 'Age', align: 'left !important' },
      { field: 'vemail', header: 'Email', align: 'left !important' },
      { field: 'vaddress', header: 'Address', align: 'left !important' },
      { field: 'vpincode', header: 'Pincode', align: 'left !important' },
      { field: 'vcollegename', header: 'College', align: 'left !important' },
      { field: 'vcoursename', header: 'Course', align: 'left !important' },
      { field: 'vdepartmentname', header: 'Department', align: 'left !important' },
      { field: 'vpassword', header: 'Password', align: 'left !important' },
      { field: 'vconfirmpassword', header: 'Confirmpassword', align: 'left !important' },
    ]
  }
  onSelect(type: any) {
    let genderSelection:any = [];
    let collegeSelection:any = [];
    let courseSelection:any =[];
    let departmentSelection:any =[];
    switch (type) {
      case 'L':
        this. Genderdata.forEach((c:any) => {
          genderSelection.push({ label: c.v_gendername, value: c.v_genderid });
        })
        this. genderOptions =  genderSelection;
        this. genderOptions.unshift({ label: '-select', value: null });
        break;
        case 'E':
          this.Collegedata.forEach((c:any) => {
            collegeSelection.push({ label: c.v_collegename, value: c.v_collegeid });
          })
          this. collegenameOptions = collegeSelection;
          this. collegenameOptions.unshift({ label: '-select', value: null });
          break;
          case 'B':
            this.Coursedata .forEach((c:any) => {
              courseSelection.push({ label: c.v_coursename, value: c.v_courseid });
            })
            this.courseOptions =courseSelection;
            this.courseOptions.unshift({ label: '-select', value: null });
            break;
            case 'A':
            this. Departmentdata .forEach((c:any) => {
              departmentSelection.push({ label: c.v_departmentname, value: c.v_departmentid });
            })
            this. departmentOptions =departmentSelection;
            this. departmentOptions.unshift({ label: '-select', value: null });
            break;
    }
  }
  public CalculateAge(): void
{

if(this.dob)
 {
        var timeDiff = Math.abs(Date.now() - this.dob.getTime());
        console.log('1',timeDiff)
        var a = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
        this.age=a;
 console.log("hjdh",this.dob.getTime());
        console.log("age",a);
  
  }
}
onSave(){
  const params = {
    'sno':0,
    'firstname':this.firstname,
    'lastname':this.lastname,
    'regno':this.registerNumber,
    'genderid':this.gender,
    'dob':this.dob,
    'age':this.age,
    'address':this.address,
    'pincode':this.pincode,
    'collegeid':this.collegename,
    'courseid':this.course,
    'department':this.department,
    'email':this.email,
    'password':this.password,
    'confirmpassword':this.confirmpassword
  }
  this.resApiService.post(PathConstants.studentreg_Post, params).subscribe(res => { })
}
onView(){
  this.resApiService.get(PathConstants.studentreg_Get).subscribe(res => {this.data = res.Table
  })
}
onEdit(rowData:any){
  this.id=rowData.sno,
  this.firstname=rowData.vfirstname,
  this.lastname=rowData.vlastname,
  this.registerNumber=rowData.vregno,
  this.gender=rowData.vgenderid,
  this.dob=rowData.vdob,
  this.age=rowData.vage,
  this.email=rowData.vemail,
  this.address=rowData.vaddress,
  this.pincode=rowData.vpincode,
  this.collegename=rowData.vcollegeid,
  this.course=rowData.vcourseid,
  this.department=rowData.vdepartment,
  this.password=rowData.vpassword,
  this.confirmpassword=rowData.vconfirmpassword
}
checkPassword() {
  if (this.password !== undefined && this.password !== null && this.password.trim() !== '' &&
  this.confirmpassword !== undefined && this.confirmpassword !== null && this.confirmpassword.trim() !== '') {
        if(this.password.trim() !== this.confirmpassword.trim()) {
          this.showErrMsg = true;
          this.showMatchMsg = false;
          this.disableSave=false;
        } else {
          this.showErrMsg = false;
          this.showMatchMsg = true;
          this.disableSave=true;

        }
  } else {
    this.showErrMsg = false;
  }
}

check(confirmpassword: any) {

  if (confirmpassword.match(/[@$!%*?&]/g)) {
  this.SpecialCharErrMsg = false;
  this.validatePassword=true;

  } else {
  this.SpecialCharErrMsg = true;
  this.pswdStrongMsg = false;
  this.validatePassword=false;
 }    
if (confirmpassword.match(/[0-9]/g)) {   
  this.NumericErrMsg = false;
  this.validatePassword=true;
 } else {    
 this.NumericErrMsg = true;    
 this.pswdStrongMsg = false;  
 this.validatePassword=false;

 }    
 if (confirmpassword.match(/[A-Z]/g)) {    
 this.UpperCaseErrMsg = false;  
 this.validatePassword=true;  
 } else {    
 this.UpperCaseErrMsg = true;    
 this.pswdStrongMsg = false;  
 this.validatePassword=false;  
 }    
 if (confirmpassword.length >= 8) {    
 this.LengthErrMsg = false;   
 this.validatePassword=true; 
 } else {    
 this.LengthErrMsg = true;    
 this.pswdStrongMsg = false;
 this.validatePassword=false;
 }
 if (confirmpassword.match(/[@$!%*?&]/g) && confirmpassword.match(/[0-9]/g) && confirmpassword.match(/[A-Z]/g) && confirmpassword.length > 8)
 this.pswdStrongMsg = true;
 // this.validatePassword=false;
}
}