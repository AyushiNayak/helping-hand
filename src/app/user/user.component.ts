import { Component, OnInit,Input } from '@angular/core';
import{UserForm} from '../userForm';
import {MatRadioButton, MatDatepicker} from '@angular/material'
import { Router } from '@angular/router';
import { postcodeValidator } from 'postcode-validator';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  selectedStatus:  string ;
  matDatepicker : string;
  checkbox: boolean;
  user = new UserForm();
  postalCodeVerify:boolean;
  postalValidation:string;

  constructor(private router: Router) {

  }




  ngOnInit() {
    this.checkbox = !this.checkbox;

  }
  postalverify(){

    this.postalCodeVerify = postcodeValidator(this.user.pincode, 'IN');
   if(this.postalCodeVerify==false)
   {
this.postalValidation = 'invalid';
   }else{
    this.postalValidation = 'valid';
   }

  }

  register() : void {
this.user.gender=this.selectedStatus;
this.user.dateofbirth = this.matDatepicker;
if(this.checkbox==true)
{JSON.stringify(this.user);
  this.router.navigate(['/home']);
  console.log(this.user);}
  }

  EditUser():void{
    this.router.navigate(["edit-user"]);
  }

}
