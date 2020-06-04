import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {NeedyPeopleService} from "../needyPeople.service";
import {CategoriesService} from "../categories.service";

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
  minDate: Date;
  public people = [];
  public categories = [];

  constructor(private needservice : NeedyPeopleService, private categoryService : CategoriesService) {
    this.minDate = new Date();
    }

  ngOnInit() {
    this.needservice.getpeopleList().subscribe(data =>  this.people = data);
    this.categoryService.getVolunteerCategories().subscribe(data => this.categories = data);
  }

  search() : void {
    if(!this.isEmpty(this.selectedStatus)) {
      this.visible = true;
      JSON.stringify(this.selectedStatus);
    }
  }

  isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
  }

}
