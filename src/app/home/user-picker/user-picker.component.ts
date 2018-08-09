import { Component, OnInit  ,Input,Output,EventEmitter} from '@angular/core';
import { UserService } from '../../user/user.service';
import { IUser } from '../../user/IUser';

@Component({
  selector: 'app-user-picker',
  templateUrl: './user-picker.component.html',
  styleUrls: ['./user-picker.component.css']
})
export class UserPickerComponent implements OnInit {
  @Input() u: IUser;
  @Output() user: EventEmitter<IUser> =
  new EventEmitter<IUser>();
  constructor(private userService :UserService) { }

  ngOnInit() {
  }
onClick(){
  this.user.emit(this.u);
}

}
