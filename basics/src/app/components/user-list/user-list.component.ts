import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userForm: FormGroup;
  users: FormArray = new FormArray([]);

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      users: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.bindUserForm(null);
  }

  bindUserForm(user: User): FormGroup {
    return null;
  }



}
