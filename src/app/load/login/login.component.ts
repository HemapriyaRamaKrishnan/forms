import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { EmployeeModel } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name = 'Angular-CRUD';
  eDetails : FormGroup | any ;
  submitted = false;
  employeeModelObj:EmployeeModel = new EmployeeModel();
  constructor( private formbuilder:FormBuilder, private modalService: NgbModal, private api:ApiService) { }

  ngOnInit(): void {
    
    
    this.createForm();
    console.log('value',this.eDetails.value);
  }
 
  addEmployees(content:any){
    this.modalService.open(content);
  }
  createForm(){
    this.eDetails = this.formbuilder.group({
      eId :['',Validators.required],
      firstName :['',Validators.required],
      lastName :['',Validators.required],
      emailId:['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      mobileNo:['',Validators.required,Validators.minLength(10)],
      salary:['',Validators.required]
    })
  }
  
 get e(){
   return this.eDetails.controls;
 }
 onSubmit(){
  this.submitted = true;
  console.log('form');
  console.log(this.eDetails);
 }
}
