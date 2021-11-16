import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name = 'Angular-CRUD';
  eDetails : FormGroup | any ;
  constructor( private formbuilder:FormBuilder, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.eDetails = this.formbuilder.group({
      eID :[''],
      firstName :[''],
      lastName :[''],
      emailId:[''],
      mobileNo:[''],
      salary:['']
    })
  }
  addEmployees(content:any){
    this.modalService.open(content);
  }
  

}
