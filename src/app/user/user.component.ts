import { Component, OnInit,Input } from '@angular/core';
import{UserForm} from '../userForm';
import {MatRadioButton, MatDatepicker} from '@angular/material'
import {Router} from '@angular/router';


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

  constructor(private router: Router) { 

  }




  ngOnInit() {
    this.checkbox = !this.checkbox;


  }

  register() : void {
this.user.gender=this.selectedStatus; 
this.user.dateofbirth = this.matDatepicker;
if(this.checkbox==true)
{JSON.stringify(this.user);
  console.log(this.user);}
  }

  EditUser():void{
    this.router.navigate(["edit-user"]);
  }

}
