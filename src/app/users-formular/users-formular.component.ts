import { Component, OnInit } from '@angular/core';
import {User} from "../models/user.model";

@Component({
  selector: 'app-users-formular',
  templateUrl: './users-formular.component.html',
  styleUrls: ['./users-formular.component.css']
})
export class UsersFormularComponent implements OnInit {
  user: User = [{userName: 'w', contact: 'w', userId: 'w'}];
  actualMenu: any;
  menu: any;

  public pridaj(): void {
    if (this.actualMenu == this.menu.USERS) {
      this.users.push({userId: this.user.userId, userName: this.user.userName, contact: this.user.contact});
    }
  }
  constructor() {
  }

  ngOnInit(): void {
  }

}
