import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {VolunteersService} from "../volunteers.service";
import {CategoriesService} from "../categories.service";

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
  public volunteers = [];
  public categories = [];
  visible = false;

  constructor(private router: Router, private service : VolunteersService, private categoryService : CategoriesService) {
    this.minDate = new Date();
    this.submitBtnVisible = true;
    this.updateBtnVisible = false;
    this.cancleBtnVisible = false;
  }

  ngOnInit() {
    this.service.getVolunteerList().subscribe(data => this.volunteers = data);
    this.categoryService.getVolunteerCategories().subscribe(data => this.categories = data);
  }

  submit() : void {
    if(!this.isEmpty(this.selectedStatus)){
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
