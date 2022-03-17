import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-users-zoznam',
  templateUrl: './users-zoznam.component.html',
  styleUrls: ['./users-zoznam.component.css']
})
export class UsersZoznamComponent {

  @Input()
  users: User[] = [];

  @Output()
  editUser: EventEmitter<User> = new EventEmitter<User>();

  @Output()
  deleteUser: EventEmitter<User> = new EventEmitter<User>();

  uprav(user: User): void {
    this.editUser.emit(user);
  }

  zmaz(user: User): void {
    this.deleteUser.emit(user);
  }
}
