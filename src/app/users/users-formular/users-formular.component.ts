import { Component, EventEmitter,Input,Output} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {User} from "../../models/user.model";


@Component({
  selector: 'app-users-formular',
  templateUrl: './users-formular.component.html',
  styleUrls: ['./users-formular.component.css']

})
export class UsersFormularComponent {

  @Input()
  set user(data: User | undefined) {
    if (data) {
      this.fillForm(data);
    }
  }

  @Output()
  addUser = new EventEmitter<User>();

  @Output()
  editUser = new EventEmitter<User>();

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      username: new FormControl(null),
      contact: new FormControl(null)
    });

  }


  private fillForm(user: User): void {
    this.form.setValue({id:user.userId,username:user.userName,contact:user.contact})

  }

  public pridaj(): void {
    this.addUser.emit({ userId: Math.random().toString(), userName: this.form.value.username, contact: this.form.value.contact});
    this.form.reset();
  }

  public uprav(): void {
    this.editUser.emit(this.form.value);
    this.form.reset();
  }

  public zrus(): void {
    this.user = undefined;
    this.form.reset();
  }
}
