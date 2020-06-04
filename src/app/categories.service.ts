import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Category} from "./category";

@Injectable()
export class CategoriesService {

  private needsUrl = "/assets/needCategories.json";
  private volunteersUrl = "/assets/volunteerCategories.json";

  constructor(private http: HttpClient) {}

  getNeedsCategories() : Observable<Category[]>{
    return this.http.get<Category[]>(this.needsUrl);
  }

  getVolunteerCategories() : Observable<Category[]>{
    return this.http.get<Category[]>(this.volunteersUrl);
  }
}
