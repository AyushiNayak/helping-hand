import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {People} from "./people";
import {Observable} from "rxjs/internal/Observable";
import {Router} from "@angular/router";

@Injectable()
export class NeedyPeopleService {

  private url = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port : '') + this.router.url +'/create';
  constructor(private http: HttpClient,private router: Router) { }


  getVolunteerList(details):Observable<People[]>{
     const headers = new HttpHeaders ({'Content-Type': 'application/json'});
     return this.http.post<People[]>(this.url , details,{headers: headers});
   }


}
