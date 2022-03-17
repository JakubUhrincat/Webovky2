import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Borrowings} from '../../models/borrowings.model';

@Component({
  selector: 'app-borrowings-zoznam',
  templateUrl: './borrowings-zoznam.component.html',
  styleUrls: ['./borrowings-zoznam.component.css']
})
export class BorrowingsZoznamComponent {

  @Input()
  borrowings: Borrowings[] = [];

  @Output()
  editBorrowing: EventEmitter<Borrowings> = new EventEmitter<Borrowings>();

  @Output()
  deleteBorrowing: EventEmitter<Borrowings> = new EventEmitter<Borrowings>();

  uprav(borrowing: Borrowings): void {
    this.editBorrowing.emit(borrowing);
  }

  zmaz(borrowing: Borrowings): void {
    this.deleteBorrowing.emit(borrowing);
  }
}
