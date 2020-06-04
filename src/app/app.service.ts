import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import{UserForm} from './userForm';
 

@Injectable({
  providedIn: 'root',
})
export class AppService implements CanActivate {

  constructor( public router: Router) { }

user : UserForm = new UserForm();

canActivate(): boolean {
    if ( !this.user || !this.user.id) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}