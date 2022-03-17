import { Component, EventEmitter,Input,Output} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Borrowings} from "../../models/borrowings.model";


@Component({
  selector: 'app-borrowings-formular',
  templateUrl: './borrowings-formular.component.html',
  styleUrls: ['./borrowings-formular.component.css']

})
export class BorrowingsFormularComponent {

  @Input()
  set borrowing(data: Borrowings) {
    if (data) {
      this.fillForm(data);
    }
  }

  @Output()
  addBorrowing = new EventEmitter<Borrowings>();

  @Output()
  editBorrowing = new EventEmitter<Borrowings>();

  form: FormGroup;

  constructor() {
    this.createForm();
  }

  private createForm(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      book: new FormControl(null),
      user: new FormControl(null)
    });
  }

  private fillForm(borrowing: Borrowings): void {



    this.form.controls.id.setValue(borrowing.borrowingId);
    this.form.controls.book.setValue(borrowing.borrowingBook);
    this.form.controls.user.setValue(borrowing.borrowingUser);
  }

  public pridaj(): void {
    this.addBorrowing.emit({ id: Math.random().toString(), book: this.form.value.book, user: this.form.value.user});
    this.form.reset();
  }

  public uprav(): void {
    this.editBorrowing.emit(this.form.value);
    this.form.reset();
  }

  public zrus(): void {
    this.borrowing = undefined;
    this.form.reset();
  }
}
