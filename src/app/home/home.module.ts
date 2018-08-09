import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user/user.service';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from './home.component';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListUserComponent } from './list-user/list-user.component';
import { UserPickerComponent } from './user-picker/user-picker.component';
import { DetailuserComponent } from './detailuser/detailuser.component';
import { DynamicTabModule } from '../dynamicTab/dynamic-tab.module';
import { RouterModule } from '../../../node_modules/@angular/router';
import { DynamicTabComponent } from '../dynamicTab/dynamic-tab.component';
import { FiltrerModule } from '../filtrer/filtrer.module';
import { FiltrerComponent } from '../filtrer/filtrer.component';
import { dataService } from '../filtrer/data.service';
import { ParentComponent } from '../colorPicker/parent/parent.component';
import { ChildComponent } from '../colorPicker/child/child.component';


@NgModule({
  imports: [  
    ReactiveFormsModule,
    CommonModule,
    DynamicTabModule,FiltrerModule,FormsModule, RouterModule.forChild([
  
      { path: 'home', component: HomeComponent,children:[
        {path :'dynamicTab' ,component:DynamicTabComponent}, 
        {path :'filtrer' ,component:FiltrerComponent},
        {path :'colorPicker' ,component:ParentComponent}

      ] },
   
  ]),
  ],  providers: [UserService,dataService],
  declarations: [HeaderComponent,FooterComponent ,HomeComponent, 
    ListUserComponent, UserPickerComponent, DetailuserComponent,
  ParentComponent,ChildComponent]
})
export class HomeModule { }
