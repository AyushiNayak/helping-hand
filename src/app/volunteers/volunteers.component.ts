import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "../categories.service";
import {error} from "util";
import {VolunteersService} from "../volunteers.service";
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import {VolunteerForm} from "../volunteerForm";
import {UserForm} from "../userForm";

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.css']
})
export class VolunteersComponent implements OnInit {
  matDatepickerStart : Date;
  matDatepickerTo : Date;
  selectedStatus : number;
  visible : boolean;
  minDate: Date;
  public people = [];
  public categories = [];
  volunteer : VolunteerForm = new VolunteerForm();
  user : UserForm;

  constructor(private volservice : VolunteersService, private categoryService : CategoriesService,private fb: FormBuilder) {
    this.minDate = new Date();
    }

  ngOnInit() {
    this.categoryService.getVolunteerCategories().subscribe(data => this.categories = data);
  }

  search() : void {
    this.volunteer.userId = 1;
    this.volunteer.category = this.selectedStatus;
    this.volunteer.startDate = this.matDatepickerStart;
    this.volunteer.endDate = this.matDatepickerTo;
    if(!this.isEmpty(this.selectedStatus)) {
      this.visible = true;
      this.volservice.getpeopleList(JSON.stringify(this.volunteer))
        .subscribe(
          data =>  console.log(data) ,
          error => console.log('an error occured'));
    }
  }

  isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
  }

}
