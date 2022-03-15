import { Component, OnInit } from '@angular/core';
import {Borrowings} from "../models/borrowings.model";

@Component({
  selector: 'app-borrowings-zoznam',
  templateUrl: './borrowings-zoznam.component.html',
  styleUrls: ['./borrowings-zoznam.component.css']
})
export class BorrowingsZoznamComponent implements OnInit {
  borrowing: Borrowings = {borrowingId: '',borrowingBook:'',borrowingUser:''}
  borrowings: Borrowings[] = []

  public pridaj():void{
    this.borrowings.push({borrowingId: this.borrowing.borrowingId,borrowingBook:this.borrowing.borrowingBook,borrowingUser:this.borrowing.borrowingUser})
  }

  constructor() { }

  ngOnInit(): void {
  }

}
