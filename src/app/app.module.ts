import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { UsersStrankaComponent } from './users-stranka/users-stranka.component';
import { UsersZoznamComponent } from './users-zoznam/users-zoznam.component';
import { UsersFormularComponent } from './users-formular/users-formular.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { BooksFormularComponent } from './books-formular/books-formular.component';
import { BooksStrankaComponent } from './books-stranka/books-stranka.component';
import { BooksZoznamComponent } from './books-zoznam/books-zoznam.component';
import { BorrowingsFormularComponent } from './borrowings-formular/borrowings-formular.component';
import { BorrowingsStrankaComponent } from './borrowings-stranka/borrowings-stranka.component';
import { BorrowingsZoznamComponent } from './borrowings-zoznam/borrowings-zoznam.component';

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
