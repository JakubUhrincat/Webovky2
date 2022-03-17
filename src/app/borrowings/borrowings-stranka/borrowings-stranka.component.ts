import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {Borrowings} from '../../models/borrowings.model';

@Component({
  templateUrl: './borrowings-stranka.component.html',
  styleUrls: ['./borrowings-stranka.component.css'],
  selector: 'app-borrowings-stranka'
})
export class BorrowingsStrankaComponent {

  borrowings: Borrowings[] = [];

  vypozickaNaUpravu?: Borrowings;

  constructor(private router: Router) { }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  pridaj(borrowing: Borrowings): void {
    this.borrowings.push(borrowing);
  }

  uprav(borrowing: Borrowings): void {
    const index = this.borrowings.findIndex(borrowingArray => borrowingArray.borrowingId === borrowing.borrowingId);
    if (index !== -1) {
      this.borrowings[index] = borrowing;
    }
  }

  upravZoZoznamu(borrowing: Borrowings): void {
    this.vypozickaNaUpravu = borrowing;
  }

  zmazZoZoznamu(borrowing: Borrowings): void {
    const index = this.borrowings.findIndex(borrowingArray => borrowingArray.borrowingId === borrowing.borrowingId);
    if (index !== -1) {
      this.borrowings.splice(index, 1);
    }
  }
}
