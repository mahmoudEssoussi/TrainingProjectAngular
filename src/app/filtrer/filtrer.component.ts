import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { IUser } from '../user/IUser';
import { UserService } from '../user/user.service';
import { dataService } from './data.service';
import { element } from '../../../node_modules/protractor';

@Component({
  selector: 'app-filtrer',
  templateUrl: './filtrer.component.html',
  styleUrls: ['./filtrer.component.css']
})
export class FiltrerComponent implements OnInit {
  message:string;
  users: IUser[] = [];
  filteredUser: IUser[];
  constructor(private userService:UserService ,private data:dataService) { }

  
 

  performFilter(filterBy: string): IUser[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.users.filter((user: IUser) =>
          user.username.toLocaleLowerCase().indexOf(filterBy) !== -1);
}

  ngOnInit() {
    this.userService.getUsers().subscribe(users=>{
      this.users=users;
      console.log(users);
     
      this.data.getMessage().subscribe(message=>{
        this.message=message;
 console.log(message);
 
 this.filteredUser = (this.message&&this.message.length>0) ? this.performFilter(this.message) : this.users;
      })
    })


  }

  

}
