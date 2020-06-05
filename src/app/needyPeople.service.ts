import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Router} from "@angular/router";
import {UserForm} from "./userForm";

@Injectable()
export class NeedyPeopleService {

  private url = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port : '') + this.router.url +'/create';
  constructor(private http: HttpClient,private router: Router) { }


  createSeeker(details):Observable<UserForm[]> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
   return this.http.post<any>(this.url, details, {headers: headers});
  }
}
