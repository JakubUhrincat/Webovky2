import { Component, OnInit } from '@angular/core';
import {Book} from "../models/book.model";

@Component({
  selector: 'app-books-zoznam',
  templateUrl: './books-zoznam.component.html',
  styleUrls: ['./books-zoznam.component.css']
})
export class BooksZoznamComponent implements OnInit{
  book: Book = { bookId: '', bookName: '', author: ''}
  books: Book[] = [];

  public pridaj(){
    this.books.push({bookId: this.book.bookId, bookName: this.book.bookName, author: this.book.author});
  }

  ngOnInit(): void {
  }

}
