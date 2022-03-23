import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Borrowings,BorrowingsList} from "./app/models/borrowings.model";

@Injectable({
  providedIn: 'root'
})
export class BorrowingsServiceService {

  private apiUrl = 'http://localhost:8080/api/borrowing';

  constructor(private http: HttpClient) { }

  getBorrowings(): Observable<BorrowingsList[]> {
    return this.http.get<BorrowingsList[]>(`${this.apiUrl}`);
  }

  getBorrowing(borrowingId: string): Observable<Borrowings> {
    return this.http.get<Borrowings>(`${this.apiUrl}/${borrowingId}`);
  }

  createBorrowing(borrowing: Borrowings): Observable<Borrowings> {
    return this.http.post<Borrowings>(`${this.apiUrl}`, {borrowingBook:borrowing.borrowingBook,borrowingUser:borrowing.borrowingUser});
  }

}
