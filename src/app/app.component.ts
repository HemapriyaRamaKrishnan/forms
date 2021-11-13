import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'forms';
  name = "Form array";
  formArray: FormGroup | any;
  text:string ="hi hello";
  age:number =233;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formArray = this.fb.group({
      user: this.fb.array([])
    })
  }
  user(): FormArray {
    return this.formArray.get('user') as FormArray
  }
  addButton() {
    const add = this.formArray.get('user') as FormArray;
    const a = this.fb.group({
      skills:this.fb.array([])
    }
    )
    add.push(a);
    console.log(this.formArray.value);
  }

  removeButton(index: number) {
    const add = this.formArray.get('user') as FormArray;
    add.removeAt(index)
  }
  newSkills(i: number): FormArray {
    return this.user()
      .at(i)
      .get('skills') as FormArray
  }
  aSkill(): FormGroup {
    return this.fb.group({
      skill: ''
    });
  }
  addSkill(i: number) {
    console.log('i',i)
    this.newSkills(i).push(this.aSkill());
  }
  removeSkill(i: number, s: number) {
    this.newSkills(i).removeAt(s);
  }
}









