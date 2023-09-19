import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../models/user.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User; // STEP-6
  userForm: FormGroup; //STEP-7
  constructor(private _fb: FormBuilder) { // STEP-2
    this.user = new User();
    this.userForm = new FormGroup({});
  }

  ngOnInit(): void {
    // Initialize form- STEP-8
    this.userForm = this._fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      address: this._fb.group({
        lineOne: [''],
        lineTwo: [''],
        city: [''],
        state: [''],
        country: ['']
      })
    });
  }

  submitForm() {
    console.log('userDetails: ', this.userForm.value);
  }
}
