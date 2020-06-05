import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "../categories.service";
import {VolunteersService} from "../volunteers.service";
import {VolunteerForm} from "../volunteerForm";
import {UserForm} from "../userForm";
import {AppService} from "../app.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";


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
  assigned:boolean = false;

  constructor(private volservice : VolunteersService, private categoryService : CategoriesService,
              private appservice : AppService,private http:HttpClient) {
    this.user = appservice.user;
    this.minDate = new Date();
    }

  ngOnInit() {
    this.categoryService.getVolunteerCategories().subscribe(data => this.categories = data);
  }

  search() : void {
    this.assigned=false;
    this.volunteer.userId = this.user.id;
    this.volunteer.category = this.selectedStatus;
    this.volunteer.startDate = this.matDatepickerStart;
    this.volunteer.endDate = this.matDatepickerTo;
    if(!this.isEmpty(this.selectedStatus)) {
      this.visible = true;
      this.volservice.getpeopleList(JSON.stringify(this.volunteer))
        .subscribe(
          data =>  this.people = data
        )}
  }


  select(id) : void{
    let sample = {volunteerId :this.appservice.user.id,seekerId : id};
    const url = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port : '') + '/request-help/request';
     if(confirm("Are you sure you want to proceed ")) {
       const headers = new HttpHeaders({'Content-Type': 'application/json'});
        this.http.post<any>(url, JSON.stringify(sample), {headers: headers})
         .subscribe(
           data =>{
             console.log(data);
           } ,
           error => console.log('an error occured') );
           this.visible = false;
           this.assigned=true;

     }
 
   }
 


  isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
  }

}
