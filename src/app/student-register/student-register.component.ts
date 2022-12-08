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
  dob:any;
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
      { field: 'vgenderid', header: 'Gender', align: 'left !important' },
      { field: 'vdob', header: 'DOB', align: 'left !important' },
      { field: 'vage', header: 'Age', align: 'left !important' },
      { field: 'vemail', header: 'Email', align: 'left !important' },
      { field: 'vaddress', header: 'Address', align: 'left !important' },
      { field: 'vpincode', header: 'Pincode', align: 'left !important' },
      { field: 'vcollegeid', header: 'College', align: 'left !important' },
      { field: 'vcourseid', header: 'Course', align: 'left !important' },
      { field: 'vdepartment', header: 'Department', align: 'left !important' },
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
}