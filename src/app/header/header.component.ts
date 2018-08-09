import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user/user.service';
import { Router } from '../../../node_modules/@angular/router';
import { dataService } from '../filtrer/data.service';
import { Message } from '../../../node_modules/@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  message:string='';

  submitted:boolean=false;
  constructor(private formBuilder :FormBuilder , private userService: UserService ,private router :Router ,private data:dataService) { }

  ngOnInit() {
  
  }
 


  onChangeSearch(){
   
  
  this.data.changeMessage(this.message);
 


}
onSubmit(){this.submitted=true; }

logout() {
  this.userService.logout();
  this.router.navigate(['/login']);
  console.log(JSON.parse(localStorage.getItem('currentUser')))
  
  }
}


