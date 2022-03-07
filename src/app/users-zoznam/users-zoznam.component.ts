import { Component, OnInit } from '@angular/core';
import {User} from "../models/User.model";

@Component({
  selector: 'app-users-zoznam',
  templateUrl: './users-zoznam.component.html',
  styleUrls: ['./users-zoznam.component.css']
})
export class UsersZoznamComponent {

  users: User[] = [];

}
