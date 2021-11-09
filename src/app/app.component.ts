import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'forms';
  name="Form array";
  formArray: FormGroup|any ;
  

constructor 
( private FormGroup:FormBuilder
  )
  {
  this.formArray = FormGroup.group({
    'user': FormGroup.array([])
  })
}
addButton(){
  const add = this.formArray.get('user') as FormArray;
  const a = this.FormGroup.group({
    skills:[]
  }
  )
   add.push(a);
   console.log(this.formArray.value);
}

removeButton(index:number){
  const add = this.formArray.get('user') as FormArray;
  add.removeAt(index)
}
}






  
