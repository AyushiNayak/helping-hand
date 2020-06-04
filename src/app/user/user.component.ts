import { Component, OnInit,Input } from '@angular/core';
import{UserForm} from '../userForm';
import {MatRadioButton, MatDatepicker} from '@angular/material'
import { Router } from '@angular/router';
import { postcodeValidator } from 'postcode-validator';
import states  from '../../assets/states.json';
import cities  from '../../assets/cities.json';
import { HttpClient } from  '@angular/common/http';
import { HttpHeaders } from  '@angular/common/http';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  checked = true;
  selectedStatus:  string ;
  role:string;
  matDatepicker : string;
  checkbox: boolean;
  user = new UserForm();
  pincode:boolean;
  postalValidation:string;
      public href: string = "";
    state:any;
  city:any;
   
  constructor(private router: Router,private http: HttpClient) {

    
  }


  ngOnInit() {
    let state1 = [];
    for (let i = 0; i < states.length ; i++) {
      state1[i] = states[i].name;
    }
    this.state = state1;
    this.checkbox = !this.checkbox;

  }
  postalverify(){

    this.pincode = postcodeValidator(this.user.pincode, 'IN');
   if(this.pincode==false)
   {
this.postalValidation = 'invalid';
   }else{
    this.postalValidation = 'valid';
   }

  }

  onStateChange(){
    let i =0;
    var city1 = cities.filter(item=>item.state==this.user.state);
    this.city= city1;
  }

  

 register() : void {
  var domain = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port : '');

 this.href = this.router.url;
 
this.user.dateofbirth = this.matDatepicker;
if(this.checkbox==true)
{
   const headers = new HttpHeaders ({'Content-Type': 'application/json'});
this.http.post(domain+this.href+'/userCreate', JSON.stringify(this.user), {headers: headers})
  .subscribe(
      data => {
        console.log('favourite received');
      },
      error => {
        console.log('an error occured');
      } 
    )

  
  
  JSON.stringify(this.user);
  this.router.navigate(['/home']);
  console.log(this.user);}
  }


}
