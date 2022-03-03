import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-formular',
  templateUrl: './users-formular.component.html',
  styleUrls: ['./users-formular.component.css']
})
export class UsersFormularComponent implements OnInit {

  user={userId:"",userName:"",contact:""}
  users:any=[];
  constructor() { }

}
