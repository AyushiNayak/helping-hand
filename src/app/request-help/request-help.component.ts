import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CategoriesService} from "../categories.service";
import { SeekerForm} from "../seekerForm";
import {NeedyPeopleService} from "../needyPeople.service";
import {UserForm} from "../userForm";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {People} from "../people";

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
  cancleBtnVisible : boolean;
  public volunteers = [];
  public categories = [];
  visible = false;
  seeker : SeekerForm = new SeekerForm();
  user : UserForm;


  constructor(private router: Router, private service : NeedyPeopleService, private categoryService : CategoriesService,
              private http:HttpClient) {
    this.minDate = new Date();
    this.submitBtnVisible = true;
    this.updateBtnVisible = false;
    this.cancleBtnVisible = false;
  }

  ngOnInit() {
    this.categoryService.getVolunteerCategories().subscribe(data => this.categories = data);
  }

  submit() : void {
    this.seeker.userId = 1;
    this.seeker.category = this.selectedStatus;
    this.seeker.startDate = this.matDatepickerStart;
    this.seeker.description = this.description;
    if(!this.isEmpty(this.selectedStatus)){
      console.log(JSON.stringify(this.seeker));
      this.service.getVolunteerList(JSON.stringify(this.seeker))
        .subscribe(
          data => console.log(data),
            error => console.log('an error occured') );
      this.visible = true;
    }
  }

  select() : void{
    this.submitBtnVisible = false;
    this.updateBtnVisible = true;
    this.cancleBtnVisible = true;

    /*var domain = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port : '')+ this.router.url;
    const headers = new HttpHeaders ({'Content-Type': 'application/json'});
    this.http.post(domain+'/create', JSON.stringify(this.details), {headers: headers})
      .subscribe(
        data => {
          console.log('favourite received');
        },
        error => {
          console.log('an error occured');
        }
      )*/

  }

  delete() : void{
    this.submitBtnVisible = true;
    this.updateBtnVisible = false;
    this.cancleBtnVisible = false;
    this.visible = false;
  }

   isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
  }

}
