import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { User } from '../services/user.model';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.userForm = this.formBuilder.group({
      email:['', Validators.required],
      password:['', Validators.required],
      firstName:['', Validators.required],
      lastName:['', Validators.required]
    })
  }

  onSubmit(): void {
    const formValue = this.userForm.value
    this.userService.addNewUser(formValue)
  }
}
