import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserForm } from '../user-form';
import { UserManageService } from '../user-manage.service';

@Component({
  selector: 'ecom-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {

  user : UserForm | undefined;
  userSubscription: Subscription;

  constructor(private userManage: UserManageService, private router: Router){
    this.userSubscription = this.userManage.getUser().subscribe(user=>{
      this.user = user;
    });
  }

  logout(){
    this.userManage.logout();
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void{
    if(this.userSubscription){
      this.userSubscription.unsubscribe();
    }
  }

}
