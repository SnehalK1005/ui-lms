import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = "http://localhost:8080/api/v1"
  constructor(private httpClient: HttpClient) { }

  getBooksList(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseUrl}/books`);
  }
  addBook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(`${this.baseUrl}/books`, book);
  }
  getBookById(id: number|undefined): Observable<Book> {
    return this.httpClient.get<Book>(`${this.baseUrl}/book/${id}`);
  }
}
