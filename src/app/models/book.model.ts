export class Book{
  bookId:string;
  bookName:string;
  author:string;
  avaible:string;

//  book={bookId:"",bookName:"",author:"",available:""}

  constructor(book: Book) {
    this.bookId = book.bookId;
    this.bookName = book.bookName;
    this.author = book.author;
    this.avaible = book.avaible;
  }
}