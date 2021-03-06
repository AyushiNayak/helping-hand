import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {UserComponent} from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import {RequestHelpComponent} from "./request-help/request-help.component";
import {VolunteersComponent} from "./volunteers/volunteers.component";
import { AppService } from './app.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path : 'user', component : UserComponent,canActivate: [AppService]},
  { path : '', component : LoginComponent},
  { path : 'edit-user', component: EditUserComponent,canActivate: [AppService]},
  { path: 'request-help', component: RequestHelpComponent,canActivate: [AppService]},
  { path: 'volunteers', component:VolunteersComponent,canActivate: [AppService]}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
