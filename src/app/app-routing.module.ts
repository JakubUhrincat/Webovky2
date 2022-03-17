import {RouterModule, Routes} from "@angular/router";
import {UsersStrankaComponent} from "./users/users-stranka/users-stranka.component";
import {NgModule} from "@angular/core";
import {BorrowingsStrankaComponent} from "./borrowings/borrowings-stranka/borrowings-stranka.component";
import {BooksStrankaComponent} from "./books/books-stranka/books-stranka.component";
import {MenuComponent} from './menu/menu.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersStrankaComponent
  },
  {
    path: 'borrowings',
    component: BorrowingsStrankaComponent
  },
  {
    path: 'books',
    component: BooksStrankaComponent
  },
  {
    path: '',
    component: MenuComponent
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
