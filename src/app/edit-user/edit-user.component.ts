import { Component, OnInit,Input ,ViewChild} from '@angular/core';
import{UserForm} from '../userForm';
import {MatRadioButton, MatDatepicker} from '@angular/material'
import {FormControl, Validators} from '@angular/forms';
import states  from '../../assets/states.json';
import cities  from '../../assets/cities.json';
import { HttpClient } from  '@angular/common/http';
import { HttpHeaders } from  '@angular/common/http';
import { LoginComponent } from '../login/login.component';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { postcodeValidator } from 'postcode-validator';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  @ViewChild(LoginComponent) id;
 selectedStatus:  string ;  
 matDatepicker : string;
  role:string;
  checkbox: boolean;
  editUser = new UserForm();
  state:any;
  city:any;
  pincode:boolean;
  postalValidation:string;
  public href: string = "";
  

  constructor(private router: Router,private http: HttpClient,private appservice:AppService) {
    this.editUser = appservice.user;
 }

  


  ngOnInit() {
    let state1 = [];
    for (let i = 0; i < states.length ; i++) {
      state1[i] = states[i].name;
    }
    this.state = state1;
    this.getUsers();
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
  this.href = this.router.url;
  this.editUser.dateofbirth = this.matDatepicker;
  const headers = new HttpHeaders ({'Content-Type': 'application/json'});
  this.http.post(domain+this.href+'/create', JSON.stringify(this.editUser), {headers: headers})
  .subscribe(
      data => {
        console.log('favourite received');
      },
      error => {
        console.log('an error occured');
      });
      this.router.navigate(['/home']);
      
}

getUsers():UserForm{
  var domain = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port : '');
  this.href = this.router.url;
  const headers = new HttpHeaders ({'Content-Type': 'application/json'});
  this.http.get<any>(domain+this.href+'user/'+this.id).subscribe(data => {
    this.id = data.id;
    this.editUser.firstName = data.firstName;
    this.editUser.lastName = data.lastName;
    this.editUser.address = data.address;
    this.editUser.email = data.email;
    this.editUser.gender = data.gender;
    this.editUser.occupation = data.occupation;
    this.editUser.role = data.role;
    this.matDatepicker = data.dateofbirth;
    this.router.navigate(['/request-help'])
 },
 error => {
  console.log('an error occured');
})
  return this.editUser;
}



  

}
