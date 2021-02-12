import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserManageService } from 'src/app/user-manage.service';

@Component({
  selector: 'ecom-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    repeatPassword: new FormControl('', [Validators.required, this.passwordsMatch]),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required])
  });

  constructor(private router: Router, private userManage: UserManageService) { 
    console.log('userForm', this.userForm);
  }

  ngOnInit(): void {
  }

  
  passwordsMatch(control: FormControl) {
    const password = control.root.get('password');
    return password && control.value !== password.value ?
      {
        passwordMatch: true
      }
      : null;
  }

  register() {
    if (!this.userForm.valid) {
      return;
    }
    const user = this.userForm.getRawValue();
    this.userManage.register(user).subscribe(s => {
      this.router.navigate(['/products/all-products'])
    })
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

  get repeatPassword() {
    return this.userForm.get('repeatPassword');
  }

  get firstname() {
    return this.userForm.get('firstname');
  }

  get lastname() {
    return this.userForm.get('lastname');
  }

}