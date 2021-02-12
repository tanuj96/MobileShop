import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserManageService } from '../user-manage.service';

@Component({
  selector: 'ecom-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  user = {};
  constructor(private router: Router, private userManage: UserManageService) { }

  ngOnInit(): void {
  }

  onClickLogin(user: NgForm) {
    this.userManage.login(user.value.email, user.value.password).subscribe(() => {
      this.router.navigate(['/products/all-products']);
    })
  }
}
