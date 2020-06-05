import { Injectable } from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserForm} from "./userForm";

@Injectable()
export class VolunteersService {

  private url = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port : '') + this.router.url +'/create';

  constructor(private http: HttpClient,private router : Router) { }

   getpeopleList(details):Observable<UserForm[]>{
       const headers = new HttpHeaders ({'Content-Type': 'application/json'});
       return this.http.post<UserForm[]>(this.url, details , {headers: headers});
  }
}
