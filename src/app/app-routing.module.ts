import {RouterModule, Routes} from "@angular/router";
import {UsersStrankaComponent} from "./users-stranka/users-stranka.component";
import {NgModule} from "@angular/core";
import {BookStrankaComponent} from "./book-stranka/book-stranka.component";

const routes: Routes = [
  {
    path: 'users',
    component: UsersStrankaComponent,

    path: 'book',
    component: BookStrankaComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
