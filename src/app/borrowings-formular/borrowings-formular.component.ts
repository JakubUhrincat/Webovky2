import { Component, OnInit } from '@angular/core';
import {Borrowings} from "../models/borrowings.model";

@Component({
  selector: 'app-borrowings-formular',
  templateUrl: './borrowings-formular.component.html',
  styleUrls: ['./borrowings-formular.component.css']
})
export class BorrowingsFormularComponent implements OnInit {
  borrowing: Borrowings = { borrowingId: '', borrowingBook: '', borrowingUser: ''}
  borrowings: Borrowings[]= [];

  public pridaj():void{
    this.borrowings.push({borrowingId: this.borrowing.borrowingId,borrowingBook: this.borrowing.borrowingBook, borrowingUser: this.borrowing.borrowingUser})
  }

  constructor() { }

  ngOnInit(): void {
  }

}
