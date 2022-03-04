import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { UsersStrankaComponent } from './users-stranka/users-stranka.component';
import { UsersZoznamComponent } from './users-zoznam/users-zoznam.component';
import { UsersFormularComponent } from './users-formular/users-formular.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {BookZoznamComponent} from "./book-zoznam/book-zoznam.component";
import {BookFormularComponent} from "./book-formular/book-formular.component";
import {BookStrankaComponent} from "./book-stranka/book-stranka.component";

@NgModule({
  declarations: [
    AppComponent,
    UsersStrankaComponent,
    UsersZoznamComponent,
    UsersFormularComponent,

    BookFormularComponent,
    BookZoznamComponent,
    BookStrankaComponent
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
