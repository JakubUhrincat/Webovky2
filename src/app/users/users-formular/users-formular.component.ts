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
  set user(data: User) {
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
    this.createForm();
  }

  private createForm(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      username: new FormControl(null),
      contact: new FormControl(null)
    });
  }

  private fillForm(user: User): void {
    /*
    treba zadat hodnoty pre vsetky formControls vo formGroup, ak nie, hodi error
    this.form.setValue({
      meno: osoba.meno,
      priezvisko: osoba.priezvisko
    });
    */

    /* netreba zadat vsetky hodnoty formControls vo formGroup
    this.form.patchValue({
      meno: osoba.meno,
      priezvisko: osoba.priezvisko
    });
     */


    this.form.controls.id.setValue(user.userId);
    this.form.controls.username.setValue(user.userName);
    this.form.controls.contact.setValue(user.contact);
  }

  public pridaj(): void {
    this.addUser.emit({ id: Math.random().toString(), username: this.form.value.username, contact: this.form.value.contact});
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
