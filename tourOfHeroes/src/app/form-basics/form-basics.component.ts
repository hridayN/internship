import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../models/userForm';

@Component({
  selector: 'app-form-basics',
  templateUrl: './form-basics.component.html',
  styleUrls: ['./form-basics.component.css']
})
export class FormBasicsComponent {
  User: User;
  UserFormGroup: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.User = new User();
    this.UserFormGroup = new FormGroup({});
  }

  ngOnInit() {
    this.UserFormGroup = this._fb.group({
      ContactPerson: [''],
      ContactNumber: [''],
      CompanyName: [''],
      CompanyAddress: this._fb.group({
        LineOne: [''],
        LineTwo: [''],
        City: [''],
        State: ['']
      }),
      CompanyEmail: ['']
    })
  }

  submitForm() {
    let dummy: User = new User();
    dummy.ContactPerson = this.UserFormGroup.controls['ContactPerson'].value;
    dummy.ContactNumber = this.UserFormGroup.controls['ContactNumber'].value;
    dummy.CompnayName = this.UserFormGroup.controls['CompnayName'].value;
    dummy.CompanyAddress.LineOne = this.UserFormGroup.controls['LineOne'].value;
    dummy.CompanyAddress.LineTwo = this.UserFormGroup.controls['LineTwo'].value;
    dummy.CompanyAddress.City = this.UserFormGroup.controls['City'].value;
    dummy.CompanyAddress.State = this.UserFormGroup.controls['State'].value;
    dummy.CompanyEmail = this.UserFormGroup.controls['CompanyEmail'].value;
    console.log('userDetails: ', this.UserFormGroup.value);
    this.User = dummy;
    console.log(this.User);
  }
}
