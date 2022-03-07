import { Component } from '@angular/core';
import {Router} from "@angular/router";

enum MENU{USERS,BOOKS,BORROWINGS}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menu = MENU;
  actualMenu: MENU = MENU.USERS;
title='priklad'
//  user={userId:"",userName:"",contact:""}
  book = {bookId: "", bookName: "", author: "", available: ""}
//  borrowing={borrowingId:"",borrowingBook:"",borrowingUser:""}
//  users:any=[];
//  books:any=[];
//  borrowings:any=[];

  /*
   public pridaj(): void {
     if (this.actualMenu == this.menu.USERS) {
       this.users.push({userId: this.user.userId, userName: this.user.userName, contact: this.user.contact});
     }else if(this.actualMenu == this.menu.BOOKS){
       this.books.push({bookId: this.book.bookId,bookName: this.book.bookName,author:this.book.author,available:this.book.available})
     }else
       this.borrowings.push({borrowingId:this.borrowing.borrowingId,borrowingBook:this.borrowing.borrowingBook,borrowingUser: this.borrowing.borrowingUser});
     }
  */

  constructor(private router: Router) {
  }

  public openMenu(m: MENU) {
     if (m == MENU.USERS) {
       this.router.navigate(['/users']);
     }
    else if (m == MENU.BOOKS) {
      this.router.navigate(['/books']);
    }
  else{
    this.router.navigate(['/borrowings']);
  }
}/*
  public pridaj(): void {
    if (this.actualMenu == this.menu.USERS) {
      this.users.push({userId: this.user.userId, userName: this.user.userName, contact: this.user.contact});
    }else if(this.actualMenu == this.menu.BOOKS && this.user.userId == this.book.bookId){
      this.books.push({bookId: this.book.bookId,bookName: this.book.bookName,author:this.book.author,available:this.book.available})
    }else if(this.user.userId == this.borrowing.borrowingId && this.book.bookName == this.borrowing.borrowingBook && this.user.userName == this.borrowing.borrowingUser)
      this.borrowings.push({borrowingId:this.borrowing.borrowingId,borrowingBook:this.borrowing.borrowingBook,borrowingUser: this.borrowing.borrowingUser});
  }

*/
  }


