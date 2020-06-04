import { Injectable } from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {HttpClient} from "@angular/common/http";
import {People} from "./people";
import {Volunteer} from "./volunteer";

@Injectable()
export class VolunteersService {

  url = "/assets/pplCategories.json";
  constructor(private http: HttpClient) { }

  getVolunteerList():Observable<Volunteer[]>{
    return this.http.get<Volunteer[]>(this.url);
  }
}
