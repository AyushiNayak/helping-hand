import { Component, OnInit ,Input} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {and} from "@angular/router/src/utils/collection";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {
    this.otpStatus= 'false';
    this.mobileNoExist = false;
    this.volunteer = true;
    this.people = false;
  }
  phonenumber: string;
 otpStatus:string;
  otp:number;
  invalidmessage:boolean;
  confirmationResultdisplay:any;
  mobileNoExist : boolean;
  volunteer : boolean;
  people : boolean;

    ngOnInit() {

      window['recaptchaVerifier'] = new window['firebase'].auth.RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        'callback': (response) =>{
          //this.generateotp();
        }

        });
    }

    generateotp() : void {
      this.otpStatus = 'true';
var phone = '+91'+this.phonenumber;
            window['firebase'].auth().signInWithPhoneNumber(phone, window['recaptchaVerifier'])
    .then( (confirmationResult)=> {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).


      this.confirmationResultdisplay = confirmationResult;

    }).catch((error) =>{

        this.otpStatus = 'false';

    });


/*
      if(this.phonenumber == '1234567899' ){
      this.otpStatus = 'true';
       //this.router.navigate(["user"]);
      }else {
        this.otpStatus = 'false';
      } */
    }



    login():void{


      var code = this.otp;
      this.confirmationResultdisplay.confirm(code).then((result) =>{
        // User signed in successfully.
        var user = result.user;
        console.log(user);
        if(this.mobileNoExist &&  this.volunteer){
          this.router.navigate(['/volunteers']);
        }else if(this.mobileNoExist && this.people ){
          this.router.navigate(['/request-help']);
        } else{
          this.router.navigate(["user"]);
        }
      }).catch((error) =>{
        // User couldn't sign in (bad verification code?)
        this.invalidmessage = true;
      });






     /* if(this.otp==123456)
     {
      this.invalidmessage = false;

      this.router.navigate(["user"]);
     }
     else{
this.invalidmessage = true;

     } */


    }
    }

