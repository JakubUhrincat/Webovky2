import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user.model";

@Component({
  selector: 'app-users-zoznam',
  templateUrl: './users-zoznam.component.html',
  styleUrls: ['./users-zoznam.component.css']
})
export class UsersZoznamComponent implements OnInit {

  user: User={userId: "", userName: "", contact: ""};
  users:User[] =[];

  public pridaj():void{
    this.users.push({userId: this.user.userId,userName:this.user.userName,contact:this.user.contact})
  }

  ngOnInit(): void {
  }

}
