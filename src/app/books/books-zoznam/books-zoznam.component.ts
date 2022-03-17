import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from '../../models/book.model';

@Component({
  selector: 'app-books-zoznam',
  templateUrl: './books-zoznam.component.html',
  styleUrls: ['./books-zoznam.component.css']
})
export class BooksZoznamComponent {

  @Input()
  books: Book[] = [];

  @Output()
  editBook: EventEmitter<Book> = new EventEmitter<Book>();

  @Output()
  deleteBook: EventEmitter<Book> = new EventEmitter<Book>();

  uprav(book: Book): void {
    this.editBook.emit(book);
  }

  zmaz(book: Book): void {
    this.deleteBook.emit(book);
  }
}
