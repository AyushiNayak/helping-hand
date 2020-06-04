import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-request-help',
  templateUrl: './request-help.component.html',
  styleUrls: ['./request-help.component.css']
})

export class RequestHelpComponent implements OnInit {
  selectedStatus:  string ;
  matDatepickerStart : string;
  matDatepickerTo : string;
  minDate: Date;
  details : string;
  submitBtnVisible : boolean;
  updateBtnVisible : boolean;
  cancleBtnVisible : boolean;
  categories = ["Need Medicines",
    "Need food / know someone who is in need",
    "Assistance needed for hospital Visit",
    "Grocery/Daily basic items needed",
    "Feeling lonely/in depression , need to talk to someone",
    "Need a ride to / from airport / railway station"
  ];
  visible = false;
  volunteers = [
    {
      name:"Priyanka Pattnaik",
      age: 16 ,
      gender:"female",
      location : "Madhapur,Hyderabad - 500081"
    },{
      name:"Ayushi Nayak",
      age: 16 ,
      gender:"female",
      location : "whitefield,Hyderabad - 500081"
    },{
      name:"Sanjida balasker",
      age: 16 ,
      gender:"female",
      location : "whitefield,Hyderabad - 500081"
    }, {
      name:"Lasya Priya",
      age: 16 ,
      gender:"female",
      location : "whitefield,Hyderabad - 500081"
    }
  ]
  //reqHelp = new RequestHelpForm();
  constructor(private router: Router) {
    this.minDate = new Date();
    this.submitBtnVisible = true;
    this.updateBtnVisible = false;
    this.cancleBtnVisible = false;
  }

  ngOnInit() {
  }

  submit() : void {
    if(!this.isEmpty(this.selectedStatus) && !this.isEmpty(this.matDatepickerStart)){
      console.log(this.selectedStatus + ","+ this.matDatepickerStart);
      this.visible = true;
    }
    JSON.stringify(this.selectedStatus);
  }

  select() : void{
    this.submitBtnVisible = false;
    this.updateBtnVisible = true;
    this.cancleBtnVisible = true;
  }

  cancle() : void{
    this.submitBtnVisible = true;
    this.updateBtnVisible = false;
    this.cancleBtnVisible = false;
    this.matDatepickerStart = "";
    this.matDatepickerTo = "";
    this.details = "";
    this.selectedStatus = "";
    this.visible = false;
  }

   isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
  }

}
