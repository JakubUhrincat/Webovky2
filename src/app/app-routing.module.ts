import {RouterModule, Routes} from "@angular/router";
import {UsersStrankaComponent} from "./users-stranka/users-stranka.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: 'users',
    component: UsersStrankaComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
