import {RouterModule, Routes} from "@angular/router";
import {UsersStrankaComponent} from "./users-stranka/users-stranka.component";
import {NgModule} from "@angular/core";
import {BorrowingsStrankaComponent} from "./borrowings-stranka/borrowings-stranka.component";
import {BooksStrankaComponent} from "./books-stranka/books-stranka.component";

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
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
