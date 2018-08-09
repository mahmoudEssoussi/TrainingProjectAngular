import { Component, OnInit } from '@angular/core';
import { IUser } from '../../user/IUser';

@Component({
  selector: 'app-detailuser',
  templateUrl: './detailuser.component.html',
  styleUrls: ['./detailuser.component.css']
})
export class DetailuserComponent implements OnInit {
user :IUser;
  constructor() { }

  ngOnInit() {
  }
  userRecieved(e){
    this.user=e;
    console.log(e)
  }

}
