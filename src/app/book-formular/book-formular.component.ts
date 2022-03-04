import { Component, OnInit } from '@angular/core';
import {Book} from "../models/book.model";

@Component({
  selector: 'app-book-formular',
  templateUrl: './book-formular.component.html',
  styleUrls: ['./book-formular.component.css']
})
export class BookFormularComponent {

  book={bookId:"",bookName:"",author:"",available:""}
  books:any=[];

  constructor() { }

}
