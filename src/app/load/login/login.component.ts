import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { EmployeeModel } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name = 'Angular-CRUD';
  eDetails: any = FormGroup

  employeeData!: any;
  submitted = false;
  employeeModelObj: EmployeeModel = new EmployeeModel();
  constructor(private formbuilder: FormBuilder, private modalService: NgbModal, private apiService: ApiService) { }

  ngOnInit(): void {
    this.getEmployee();
    console.log('----------------------------1111111111111111111111',this.createForm())
    this.createForm();
    console.log(this.eDetails.value);
  }

  addEmployees(content: any) {
    this.modalService.open(content);
  }
  createForm() {

    this.eDetails = this.formbuilder.group({
      eId: [''],
      firstName: [''],
      lastName: [''],
      emailId: [''],
      mobileNo: [''],
      salary: ['']
    })
  }


  onSubmit() {
    this.submitted = true;
    console.log('form');
    console.log('submit value-------------------------------', this.eDetails.value);
  }
  getEmployee() {
    this.apiService.getEmployee().subscribe((res: any) => {
      this.employeeData = res;

      console.log('Employee Data-----------------------------', this.employeeData);

      console.log('response---------------------------++++----------------------------------', res);
    })
  }
  postEmployee() {
    let payLoad = {
      eId: this.eDetails.value.eId,
      firstName: this.eDetails.value.firstName,
      lastName: this.eDetails.value.lastName,
      emailId: this.eDetails.value.emailId,
      mobileNo: this.eDetails.value.mobileNo,
      salary: this.eDetails.value.salary
    }
    console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++', payLoad)
    this.apiService.postEmployee(payLoad)
      .subscribe((res:any) => {
        console.log('respost',res);
        // alert("employees added successfully")

        var some=document.getElementById('cancel')
        some?.click();
        this.eDetails.reset();
      },

      )


  }


}
