export class Book{
  bookId?:string;
  bookName:string;
  author:string;

//  book={bookId:"",bookName:"",author:""}

  constructor(book: Book) {
    this.bookId = book.bookId;
    this.bookName = book.bookName;
    this.author = book.author;
  }
}

export class BookZoznam {
  bookId?: string;
  bookName: string;
  author: string;


  constructor(book: BookZoznam) {
    this.bookId = book.bookId;
    this.bookName = book.bookName;
    this.author = book.author;
  }
}
