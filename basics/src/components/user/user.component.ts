import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Address } from '../../models/address.model';
import { User } from '../../models/user.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User; // STEP-6
  userForm: FormGroup; //STEP-7
  constructor(private _fb: FormBuilder,
    public dialogRef: MatDialogRef<UserComponent>) { // STEP-2
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
    let user: User = new User();
    user.firstName = this.userForm.controls['firstName'].value;
    user.lastName = this.userForm.controls['lastName'].value;
    user.email = this.userForm.controls['email'].value;

    // Create a temp FormGroup to fetch Address details
    let addressFormDetails = this.userForm.controls['address'] as FormGroup;

    // User->Address
    let addressDetails: Address = new Address();
    addressDetails.lineOne = addressFormDetails.controls['lineOne'].value;
    addressDetails.lineTwo = addressFormDetails.controls['lineTwo'].value;
    addressDetails.city = addressFormDetails.controls['city'].value;
    addressDetails.state = addressFormDetails.controls['state'].value;
    addressDetails.country = addressFormDetails.controls['country'].value;

    // Assign form-address details to user
    user.address = addressDetails;

    // Assign user form  details to user model
    this.user = user;
    console.log('userDetails: ', this.user);
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close(this.user);
  }
}
