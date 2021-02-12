import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';

import { UserForm } from './user-form';

@Injectable({
  providedIn: 'root'
})
export class UserManageService {

  private user$ = new Subject<UserForm>();

  constructor() { }

  register(user: any) {
    this.setUser(user);
    console.log(`registered user successfully`, user);
    return of(user);
  }

  private setUser(user: any) {
    this.user$.next(user);
  }

  getUser() {
    return this.user$.asObservable();
  }

  login(email: string, password: string) {
    const loginCredentials = { email, password };
    console.log('login credentials', loginCredentials);
    return of(loginCredentials);
  }


  logout() {
    this.setUser(null);
    console.log('Logout Successfull');
  }
}
