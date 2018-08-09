import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user/user.service';
import { IUser } from '../user/IUser';


@Component({

  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[UserService]
})
export class LoginComponent implements OnInit {
 

  loginForm: FormGroup;
  users: IUser[] = [];




  constructor(
    private router :Router,
    private formBuilder:FormBuilder,
    private u:UserService

  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

  

}
get f() { return this.loginForm.controls; }


onSubmit() {

this.u.getUsers().subscribe(users =>{
  this.users=users;
  this.users.forEach(element => {
      if(this.f.username.value ===element.email&&this.f.password.value===element.password)
        {var returnedUser = element;}
      if (returnedUser){
        this.u.login(returnedUser.id);
        console.log(localStorage.getItem('currentUser'));
        this.router.navigate(['/home']);
       }
    });
    

});

}

register() {
  
this.router.navigate(['/register']);

}



}
