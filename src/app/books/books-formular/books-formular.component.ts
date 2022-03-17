import { Component, EventEmitter,Input,Output} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Book} from "../../models/book.model";


@Component({
  selector: 'app-books-formular',
  templateUrl: './books-formular.component.html',
  styleUrls: ['./books-formular.component.css']

})
export class BooksFormularComponent {

  @Input()
  set book(data: Book) {
    if (data) {
      this.fillForm(data);
    }
  }

  @Output()
  addBook = new EventEmitter<Book>();

  @Output()
  editBook = new EventEmitter<Book>();

  form: FormGroup;

  constructor() {
    this.createForm();
  }

  private createForm(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null),
      author: new FormControl(null)
    });
  }

  private fillForm(book: Book): void {


    this.form.controls.id.setValue(book.bookId);
    this.form.controls.name.setValue(book.bookName);
    this.form.controls.author.setValue(book.author);
  }

  public pridaj(): void {
    this.addBook.emit({ id: Math.random().toString(), name: this.form.value.name, author: this.form.value.author});
    this.form.reset();
  }

  public uprav(): void {
    this.editBook.emit(this.form.value);
    this.form.reset();
  }

  public zrus(): void {
    this.book = undefined;
    this.form.reset();
  }
}
