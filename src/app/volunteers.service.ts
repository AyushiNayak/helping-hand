import { Injectable } from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Volunteer} from "./volunteer";
import {Router} from "@angular/router";

@Injectable()
export class VolunteersService {

  private url = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port : '') + this.router.url +'/create';

  constructor(private http: HttpClient,private router : Router) { }

   getpeopleList(details):Observable<Volunteer[]>{
       const headers = new HttpHeaders ({'Content-Type': 'application/json'});
       return this.http.post<Volunteer[]>(this.url, details , {headers: headers});
  }
}
