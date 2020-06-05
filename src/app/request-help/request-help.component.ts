import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CategoriesService} from "../categories.service";
import { SeekerForm} from "../seekerForm";
import {NeedyPeopleService} from "../needyPeople.service";
import {UserForm} from "../userForm";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AppService} from "../app.service";

@Component({
  selector: 'app-request-help',
  templateUrl: './request-help.component.html',
  styleUrls: ['./request-help.component.css']
})

export class RequestHelpComponent implements OnInit {
  selectedStatus:  number ;
  matDatepickerStart : Date;
  minDate: Date;
  description : string;
  submitBtnVisible : boolean;
  updateBtnVisible : boolean;
  deleteBtnVisible : boolean;
  public volunteers = [];
  public categories = [];
  visible = false;
  seeker : SeekerForm = new SeekerForm();
  user : UserForm;


  constructor(private router: Router, private service : NeedyPeopleService, private categoryService : CategoriesService,
              private http:HttpClient,private appservice:AppService) {
    this.user = appservice.user;
    this.minDate = new Date();
    this.submitBtnVisible = true;
    this.updateBtnVisible = false;
    this.deleteBtnVisible = false;
  }

  ngOnInit() {
    this.categoryService.getVolunteerCategories().subscribe(data => this.categories = data);
  }

  submit() : void {
    this.seeker.userId = this.appservice.user.id;
    this.seeker.category = this.selectedStatus;
    this.seeker.startDate = this.matDatepickerStart;
    this.seeker.description = this.description;
    if(!this.isEmpty(this.selectedStatus)){
      console.log(JSON.stringify(this.seeker));
      this.service.createSeeker(JSON.stringify(this.seeker))
        .subscribe(
          data =>{
            this.volunteers = data;
          } ,
            error => console.log('an error occured') );
      this.visible = true;
    }
  }

  select(id) : void{
   let sample = {volunteerId :id,seekerId : this.appservice.user.id};
   const url = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port : '') + '/request-help/request';
    if(confirm("Are you sure you want to proceed ")) {
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
       this.http.post<any>(url, JSON.stringify(sample), {headers: headers})
        .subscribe(
          data =>{
            console.log(data);
            this.visible = false;
          } ,
          error => console.log('an error occured') );
    }

  }


   isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
  }
}
