import { Component, OnInit} from '@angular/core';
import{UserForm} from '../userForm';
import {MatRadioButton, MatDatepicker} from '@angular/material'
import states  from '../../assets/states.json';
import cities  from '../../assets/cities.json';
import { HttpClient } from  '@angular/common/http';
import { HttpHeaders } from  '@angular/common/http';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { postcodeValidator } from 'postcode-validator';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
 selectedStatus:  string ;  
 matDatepicker : string;
  role:string;
  checkbox: boolean;
  editUser = new UserForm();
  cancelEditUser = new UserForm();
  state:any;
  city:any;
  pincode:boolean;
  postalValidation:string;
  public href: string = "";
  

  constructor(private router: Router,private http: HttpClient,private appservice:AppService) {
    this.editUser = appservice.user;
    this.matDatepicker = appservice.user.dateofbirth;
    }

  


  ngOnInit() {
    this.cancelEditUser = JSON.parse(JSON.stringify(this.editUser));
    let state1 = [];
    for (let i = 0; i < states.length ; i++) {
       state1[i] = states[i].name;
     }
     this.state = state1;
    
 }
 postalverify(){

  this.pincode = postcodeValidator(this.editUser.address.pinCode, 'IN');
 if(this.pincode==false)
 {
this.postalValidation = 'invalid';
 }else{
  this.postalValidation = 'valid';
 }

}

 onStateChange(){
  let i =0;
  var city1 = cities.filter(item=>item.state==this.editUser.address.state);
  this.city= city1;
}
 

saveChanges():void{
  var domain = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port : '');
  this.editUser.dateofbirth = this.matDatepicker;
  const headers = new HttpHeaders ({'Content-Type': 'application/json'});
  this.http.post<any>(domain+'/user/create', JSON.stringify(this.editUser), {headers: headers})
  .subscribe(
      data => {
        this.editUser = data;
        console.log('favourite received');
      },
      error => {
        console.log('an error occured');
      });
      this.router.navigate(['/home']);
      
}

 cancel(){
  this.editUser = this.cancelEditUser;
  this.router.navigate(['/home']);
 }
 
}
