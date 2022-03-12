import { Component, OnInit } from '@angular/core';
import {Borrowings} from "../models/borrowings.model";

@Component({
  selector: 'app-borrowings-zoznam',
  templateUrl: './borrowings-zoznam.component.html',
  styleUrls: ['./borrowings-zoznam.component.css']
})
export class BorrowingsZoznamComponent implements OnInit {
  borrowings: Borrowings[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
