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
  set borrowing(data: Borrowings | undefined) {
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
    this.form = new FormGroup({
      id: new FormControl(null),
      book: new FormControl(null),
      user: new FormControl(null)
    });
  }

  private fillForm(borrowing: Borrowings): void {
    this.form.setValue({id:borrowing.borrowingId,book:borrowing.borrowingBook,user:borrowing.borrowingUser})
  }

  public pridaj(): void {
    this.addBorrowing.emit({ borrowingId: Math.random().toString(), borrowingBook: this.form.value.book, borrowingUser: this.form.value.user});
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
