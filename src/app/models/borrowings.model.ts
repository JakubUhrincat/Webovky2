export class Borrowings{

  borrowingId?:string;
  borrowingBook:string;
  borrowingUser:string;

  //  borrowing={borrowingId:"",borrowingBook:"",borrowingUser:""}


  constructor(borrowing:Borrowings) {
    this.borrowingId = borrowing.borrowingId;
    this.borrowingBook = borrowing.borrowingBook;
    this.borrowingUser = borrowing.borrowingUser;
  }
}

export class BorrowingsList {
  borrowingId?: string;
  borrowingBook: string;
  borrowingUser: string;

  constructor(borrowing: BorrowingsList) {
    this.borrowingId = borrowing.borrowingId;
    this.borrowingBook = borrowing.borrowingBook;
    this.borrowingUser = borrowing.borrowingUser;
  }
}
