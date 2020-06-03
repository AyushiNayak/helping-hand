import { Component, OnInit } from '@angular/core';
import { MatDatepicker} from '@angular/material'
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-request-help',
  templateUrl: './request-help.component.html',
  styleUrls: ['./request-help.component.css']
})

export class RequestHelpComponent implements OnInit {
  selectedStatus:  string ;
  matDatepicker : string;
  details : string;
  dateofhelp : string;
  categories = ["ab","cd","ef","gh"];
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
  constructor(private router: Router) { }

  ngOnInit() {
  }

  submit() : void {
    if(!this.isEmpty(this.selectedStatus) && !this.isEmpty(this.matDatepicker)){
      console.log(this.selectedStatus + ","+ this.matDatepicker);
      this.visible = true;
    }
    JSON.stringify(this.selectedStatus);
  }

  select() : void{
    this.router.navigate(['/request-success']);
  }

   isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
  }

  /*getJsonLength(){
    Object.keys(this.volunteers).length >= 1 ? this.visible = true : this.visible = false;
  }
*/
}
