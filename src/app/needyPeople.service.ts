import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {People} from "./people";
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class NeedyPeopleService {

  private url = "/assets/pplCategories.json";
  constructor(private http: HttpClient) { }

   getpeopleList():Observable<People[]>{
    return this.http.get<People[]>(this.url);
   }

}
