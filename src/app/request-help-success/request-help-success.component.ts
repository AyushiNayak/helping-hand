import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-request-help-sucess',
  templateUrl: './request-help-success.component.html',
  styleUrls: ['./request-help-success.component.css']
})
export class RequestHelpSuccessComponent implements OnInit {

  name = "Priyanka";

  constructor(private router: Router) { }

  ngOnInit() {
  }


}
