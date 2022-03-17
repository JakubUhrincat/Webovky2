import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MenuComponent} from './menu/menu.component';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UsersStrankaComponent } from './users/users-stranka/users-stranka.component';
import { UsersZoznamComponent } from './users/users-zoznam/users-zoznam.component';
import { UsersFormularComponent } from './users/users-formular/users-formular.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { BooksFormularComponent } from './books/books-formular/books-formular.component';
import { BooksStrankaComponent } from './books/books-stranka/books-stranka.component';
import { BooksZoznamComponent } from './books/books-zoznam/books-zoznam.component';
import { BorrowingsFormularComponent } from './borrowings/borrowings-formular/borrowings-formular.component';
import { BorrowingsStrankaComponent } from './borrowings/borrowings-stranka/borrowings-stranka.component';
import { BorrowingsZoznamComponent } from './borrowings/borrowings-zoznam/borrowings-zoznam.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    UsersStrankaComponent,
    UsersZoznamComponent,
    UsersFormularComponent,
    MenuComponent,
    BooksFormularComponent,
    BooksStrankaComponent,
    BooksZoznamComponent,
    BorrowingsFormularComponent,
    BorrowingsStrankaComponent,
    BorrowingsZoznamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
