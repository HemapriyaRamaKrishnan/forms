import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadRoutingModule } from './load-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    LoadRoutingModule
  ]
})
export class LoadModule { }
