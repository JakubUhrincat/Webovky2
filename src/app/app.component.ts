import { Component } from '@angular/core';

enum MENU{USERS,BOOKS,BORROWINGS}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menu=MENU;
  actualMenu: MENU= MENU.USERS;

  user={userId:"",userName:"",contact:""}
  book={bookId:"",bookName:"",author:"",available:""}
  borrowing={borrowingId:"",borrowingBook:"",borrowingUser:""}
  users:any=[];
  books:any=[];
  borrowings:any=[];

//  public pridaj(): void{
//    this.users.push({userId: {this.user.userId},name:{this.user.userName},contact:{user.contact}});
//  }

public openMenu(m:MENU){
  this.actualMenu=m;
}

}
