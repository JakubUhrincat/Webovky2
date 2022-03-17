import { Component, OnInit } from '@angular/core';
import {Book} from "../../models/book.model";

@Component({
  selector: 'app-books-formular',
  templateUrl: './books-formular.component.html',
  styleUrls: ['./books-formular.component.css']
})
export class BooksFormularComponent implements OnInit{

  book: Book = { bookId: '', bookName: '', author: ''}
  books: Book[]=[];

  public pridaj(){
    this.books.push({bookId: this.book.bookId, bookName: this.book.bookName, author: this.book.author});
  }

  constructor() { }

  ngOnInit(): void {
  }



}
