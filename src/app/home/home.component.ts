import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  EditUser():void{
    this.router.navigate(["edit-user"]);
  }

  helpRequest() : void {
    this.router.navigate(['/request-help']);
  }
}
