import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule} from './app.routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,MatExpansionModule,MatSelectModule,MatGridListModule,
   MatMenuModule,MatIconModule, MatProgressSpinnerModule,MatRadioModule,MatDatepickerModule,MatNativeDateModule,MatToolbarModule,MatCheckboxModule
} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { RequestHelpComponent } from './request-help/request-help.component';
import { RequestHelpSuccessComponent } from './request-help-success/request-help-success.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    EditUserComponent
    HomeComponent,
    RequestHelpComponent,
    RequestHelpSuccessComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatNativeDateModule,
  MatButtonModule,
  MatDatepickerModule,
  MatRadioModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  AppRoutingModule,
  MatExpansionModule,
  MatGridListModule,
  MatSelectModule,
  AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
