import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Category} from "./category";

@Injectable()
export class CategoriesService {

  private url = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port : '') + '/categories';

  constructor(private http: HttpClient) {}

  getNeedsCategories() : Observable<Category[]>{
    return this.http.get<Category[]>(this.url);
  }

  getVolunteerCategories() : Observable<Category[]>{
    return this.http.get<Category[]>(this.url);
  }
}
