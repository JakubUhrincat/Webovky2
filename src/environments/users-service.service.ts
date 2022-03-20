import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User,UsersList} from "../app/models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  private apiUrl = 'http://localhost:8080/api/customer';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UsersList[]> {
    return this.http.get<UsersList[]>(`${this.apiUrl}`);
  }

  getUser(userId: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${userId}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}`, {username: user.userName, contact: user.contact});
  }

}
