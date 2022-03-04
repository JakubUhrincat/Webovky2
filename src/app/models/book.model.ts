export class Book {

  bookId: string;
  bookName: string;
  author: string;
  available: string;

  constructor(book: Book) {
    this.bookId = book.bookId;
    this.bookName = book.bookName;
    this.author = book.author;
    this.available = book.available;
  }

}
