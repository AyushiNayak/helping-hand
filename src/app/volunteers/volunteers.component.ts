import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "../categories.service";
import {VolunteersService} from "../volunteers.service";
import {VolunteerForm} from "../volunteerForm";
import {UserForm} from "../userForm";
import {AppService} from "../app.service";

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

  constructor(private volservice : VolunteersService, private categoryService : CategoriesService,
              private appservice : AppService) {
    this.user = appservice.user;
    this.minDate = new Date();
    }

  ngOnInit() {
    this.categoryService.getVolunteerCategories().subscribe(data => this.categories = data);
  }

  search() : void {
    this.volunteer.userId = this.user.id;
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
