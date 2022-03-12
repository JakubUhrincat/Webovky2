import { Component, OnInit } from '@angular/core';
import {User} from "../models/user.model";

@Component({
  selector: 'app-users-formular',
  templateUrl: './users-formular.component.html',
  styleUrls: ['./users-formular.component.css']
})
export class UsersFormularComponent implements OnInit {
  user: User = {userId: '', userName:'',contact:''};

  constructor() { }

  ngOnInit(): void {
  }

}
