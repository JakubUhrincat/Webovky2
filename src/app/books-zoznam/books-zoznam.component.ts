import { Component, OnInit } from '@angular/core';
import {Book} from "../models/book.model";

@Component({
  selector: 'app-books-zoznam',
  templateUrl: './books-zoznam.component.html',
  styleUrls: ['./books-zoznam.component.css']
})
export class BooksZoznamComponent {

  books: Book[] = [];

}
