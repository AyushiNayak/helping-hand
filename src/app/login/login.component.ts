import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { and } from "@angular/router/src/utils/collection";
import { AppService } from '../app.service';
import { UserForm } from '../userForm';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: UserForm;
  id: any;



  constructor(private router: Router, private appservice: AppService, private http: HttpClient) {
    this.user = appservice.user;
    this.otpStatus = 'false';
  }
  phonenumber: string;
  public href: string = "";
  otpStatus: string;
  otp: number;
  invalidmessage: boolean;
  confirmationResultdisplay: any;

  ngOnInit() {
    window['recaptchaVerifier'] = new window['firebase'].auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        //this.generateotp();
      }

    });
  }

  generateotp(): void {
    this.otpStatus = 'true';
    var phone = '+91' + this.user.phoneNumber;
    window['firebase'].auth().signInWithPhoneNumber(phone, window['recaptchaVerifier'])
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).


        this.confirmationResultdisplay = confirmationResult;

      }).catch((error) => {

        this.otpStatus = 'false';

      });


  }



  login(): void {
    var code = this.otp;
    this.confirmationResultdisplay.confirm(code).then((result) => {
      // User signed in successfully.
      var user = result.user;
      var domain = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
      this.href = this.router.url;

      this.http.get<any>(domain + this.href + 'get/' + this.user.phoneNumber).subscribe(data => {

        if (data != null && data.role == "volunteer") {
          this.user= data;
          this.router.navigate(['/volunteers']);
        }
        else if (data != null && data.role == "needhelp") {
          this.user = data;
          this.router.navigate(['/request-help']);

        }
        else if (data == null) {
          this.router.navigate(["user"]);
        }


      },
        error => {
          console.log('an error occured');
        }
      )

    }).catch((error) => {
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

