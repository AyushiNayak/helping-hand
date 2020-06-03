import { Component, OnInit,Input } from '@angular/core';
import{UserForm} from '../userForm';
import {MatRadioButton, MatDatepicker} from '@angular/material'
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
    panelOpenState = false;
    selectedStatus:  string ;  
     matDatepicker : string;
  checkbox: boolean;
  editUser = new UserForm();

  constructor() { 

  }

  


  ngOnInit() {
    
 }

 saveChanges():void{
    this.editUser.gender=this.selectedStatus; 
    this.editUser.dateofbirth = this.matDatepicker;
    JSON.stringify(this.editUser);
  console.log(this.editUser);
 }

 

  

}
