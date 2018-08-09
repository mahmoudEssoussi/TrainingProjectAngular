import { Component, OnInit,EventEmitter ,Output} from '@angular/core';
import { UserPickerComponent } from '../user-picker/user-picker.component';
import { UserService } from '../../user/user.service';
import { IUser } from '../../user/IUser';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users: IUser[] = [];
  constructor(private userService:UserService) { }
  @Output() user: EventEmitter<IUser> =
  new EventEmitter<IUser>();

  ngOnInit() {
    this.userService.getUsers().subscribe(users=>{
      this.users=users;
      console.log(users);
    })
  }
userRecieved(e){
  console.log(e);
  this.user.emit(e);
}

}
