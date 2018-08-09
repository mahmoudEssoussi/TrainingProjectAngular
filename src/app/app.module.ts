import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

import { RowsColsComponent } from './dynamicTab/rows-cols/rows-cols.component';
import { RowsColsInputComponent } from './dynamicTab/rows-cols-input/rows-cols-input.component';
import { StarComponent } from './dynamicTab/star/star.component';
import { ParentComponent } from './colorPicker/parent/parent.component';
import { ChildComponent } from './colorPicker/child/child.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    


 

  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    HomeModule,
    SharedModule,
    BrowserModule,

     RouterModule.forRoot([
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full'},
      { path: '**', redirectTo: 'login', pathMatch: 'full'},
      
  ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
