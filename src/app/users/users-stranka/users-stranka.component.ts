import { Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../models/user.model';
import {UsersServiceService} from "../../../environments/users-service.service";

@Component({
  templateUrl: './users-stranka.component.html',
  styleUrls: ['./users-stranka.component.css'],
  selector: 'app-users-stranka'
})
export class UsersStrankaComponent {

  users: User[] = [];

  osobaNaUpravu?: User;

  constructor(private router: Router,private userService: UsersServiceService) { }

  ngOnInit(): void {
    this.refreshUsers();
  }

  refreshUsers(): void {
    this.userService.getUsers().subscribe(data => {
      console.log('prislo:', data);
      this.users = [];
      for (const d of data) {
        this.users.push({ userId: d.userId, userName: d.userName, contact: d.contact});
      }
    });
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  pridaj(user: User): void {
    this.users.push(user);
  }

  uprav(user: User): void {
    const index = this.users.findIndex(userArray => userArray.userId === user.userId);
    if (index !== -1) {
      this.users[index] = user;
    }
  }

  upravZoZoznamu(user: User): void {
    this.osobaNaUpravu = user;
  }

  zmazZoZoznamu(user: User): void {
    const index = this.users.findIndex(userArray => userArray.userId === user.userId);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
}
