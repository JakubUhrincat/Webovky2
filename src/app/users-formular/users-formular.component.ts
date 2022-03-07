import { Component, OnInit } from '@angular/core';
import {User} from "../models/User.model";

@Component({
  selector: 'app-users-formular',
  templateUrl: './users-formular.component.html',
  styleUrls: ['./users-formular.component.css']
})
export class UsersFormularComponent {
  user: User = {userId: '', userName:'',contact:''};

}
