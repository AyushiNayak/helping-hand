import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.css']
})
export class VolunteersComponent implements OnInit {
  selectedStatus : string;
  matDatepickerStart : string;
  matDatepickerTo : string;
  visible : boolean;
  details = true;
  startDate: Date;


  constructor() {
    this.startDate = new Date();
    }

  ngOnInit() {
  }

  categories = ["Medicine requirement","Food requirement","Hospital Visit","Daily essentials","Emotional Support - Voice call","Airport/Train Pickup/Drop"]

  people = [
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
  search() : void {
    this.visible = true;
    JSON.stringify(this.selectedStatus);
  }

  isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
  }

}
