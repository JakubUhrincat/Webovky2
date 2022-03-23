import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {Book} from '../../models/book.model';
import {BookServiceService} from '../../../book-service.service';

@Component({
  templateUrl: './books-stranka.component.html',
  styleUrls: ['./books-stranka.component.css'],
  selector: 'app-books-stranka'
})
export class BooksStrankaComponent {

  books: Book[] = [];

  knihaNaUpravu?: Book;

  constructor(private router: Router, private bookService: BookServiceService) { }

  ngOnInit(): void {
    this.refreshBooks();
  }

  refreshBooks(): void {
    this.bookService.getBooks().subscribe(data => {
      console.log('prislo:', data);
      this.books = [];
      for (const d of data) {
        this.books.push({ bookId: d.bookId, bookName: d.bookName, author: d.author});
      }
    });
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  pridaj(book: Book): void {
    this.books.push(book);
  }

  uprav(book: Book): void {
    const index = this.books.findIndex(bookArray => bookArray.bookId === book.bookId);
    if (index !== -1) {
      this.books[index] = book;
    }
  }

  upravZoZoznamu(book: Book): void {
    this.knihaNaUpravu = book;
  }

  zmazZoZoznamu(book: Book): void {
    const index = this.books.findIndex(bookArray => bookArray.bookId === book.bookId);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }
}
