import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
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

@NgModule({
  declarations: [
    AppComponent,
    UsersStrankaComponent,
    UsersZoznamComponent,
    UsersFormularComponent,
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
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
