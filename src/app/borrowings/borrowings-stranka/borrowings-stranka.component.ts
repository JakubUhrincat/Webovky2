import { Component ,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Borrowings} from '../../models/borrowings.model';
import {BorrowingsServiceService} from "../../../borrowings-service.service";


@Component({
  templateUrl: './borrowings-stranka.component.html',
  styleUrls: ['./borrowings-stranka.component.css'],
  selector: 'app-borrowings-stranka'
})
export class BorrowingsStrankaComponent implements OnInit{

  borrowings: Borrowings[] = [];

  vypozickaNaUpravu?: Borrowings;

  constructor(private router: Router,private borrowingsService: BorrowingsServiceService) { }

  ngOnInit(): void {
    this.refreshBorrowings();
  }

  refreshBorrowings(): void {
    this.borrowingsService.getBorrowings().subscribe(data => {
      console.log('prislo:', data);
      this.borrowings = [];
      for (const d of data) {
        this.borrowings.push({ borrowingId: d.borrowingId, borrowingBook: d.borrowingBook, borrowingUser: d.borrowingUser});
      }
    });
  }

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
