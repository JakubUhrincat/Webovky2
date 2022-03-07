export class Borrowings{

  borrowingId:string;
  borrowingBook:string;
  borrowingUser:string;

  //  borrowing={borrowingId:"",borrowingBook:"",borrowingUser:""}


  constructor(borrowing:Borrowing) {
    this.borrowingId = borrowing.borrowingId;
    this.borrowingBook = borrowing.borrowingBook;
    this.borrowingUser = borrowing.borrowingUser;
  }
}
