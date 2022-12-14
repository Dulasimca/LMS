import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/Services/rest-api.service';

@Component({
  selector: 'app-editionmaster',
  templateUrl: './editionmaster.component.html',
  styleUrls: ['./editionmaster.component.css']
})
export class EditionmasterComponent implements OnInit {
  edirtionname:any;
  selectedType:any;
  cols:any;
  data:any;
 
  constructor(private restapiservice: RestApiService) { }

  ngOnInit(): void {
  }

}
