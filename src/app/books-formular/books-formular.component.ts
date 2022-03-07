import { Component, OnInit } from '@angular/core';
import {Book} from "../models/book.model";

@Component({
  selector: 'app-books-formular',
  templateUrl: './books-formular.component.html',
  styleUrls: ['./books-formular.component.css']
})
export class BooksFormularComponent{
  book: Book = { bookId: '', bookName: '', author: '',available:'' }

}
