import { Component, OnInit } from '@angular/core';
import {Borrowings} from "../models/borrowings.model";

@Component({
  selector: 'app-borrowings-formular',
  templateUrl: './borrowings-formular.component.html',
  styleUrls: ['./borrowings-formular.component.css']
})
export class BorrowingsFormularComponent implements OnInit {
  borrowing: Borrowings = { borrowingId: '', borrowingBook: '', borrowingUser: ''}

  constructor() { }

  ngOnInit(): void {
  }

}
