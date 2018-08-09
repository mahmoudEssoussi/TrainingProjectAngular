import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user/user.service';
import { IUser } from '../user/IUser';
import { Router } from '../../../node_modules/@angular/router';

var alertify =  require ( 'alertify.js');

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],providers:[UserService]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted:boolean=false;
  users: IUser[] = [];


  constructor( private formBuilder :FormBuilder , private userService: UserService ,private router :Router) { }

  

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required  ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordR: ['', [Validators.required, Validators.minLength(6)]],
    });
}

get f() { return this.registerForm.controls; }

onSubmit(){
  this.userService.getUsers().subscribe(users =>{
    this.users=users;
    this.users.forEach(element => {
        if(this.f.email.value ===element.email)
          {var returnedUser = element;
          }
          alertify.warning("this account already exist !!! try to login ");
          this.router.navigate(['/login']);
      
      });
      
  
  });}

}
