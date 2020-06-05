import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Router} from "@angular/router";
import {UserForm} from "./userForm";

@Injectable()
export class NeedyPeopleService {

  private url = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port : '') + this.router.url +'/create';
  private volunteerUrl = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port : '') + '/volunteers/create';
  constructor(private http: HttpClient,private router: Router) { }


  createSeeker(details):Observable<UserForm[]> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.post<any>(this.url, details, {headers: headers})
      .subscribe(
        data => {
           return this.http.post<UserForm[]>(this.volunteerUrl, details, {headers: headers});
        },
        error => {
          console.log('an error occured');
          return [];
        }
      )
    return ;
  }



}
