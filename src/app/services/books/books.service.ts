import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get('http://localhost:8001/api/v1/books')
    .toPromise().then(response => response)
    .catch(error => error.message);
  }

  getBook(bookId) {
    return this.http.get(`http://localhost:8001/api/v1/books/${bookId}`)
    .toPromise().then(response => response)
    .catch(error => error.message);
  }

  borrowBook(bookId) {
    return this.http.get(`http://localhost:8001/api/v1/books/${bookId}/borrow`)
    .toPromise().then(response => response)
    .catch(error => error.message);
  }

  getABorrowed(bookId) {
    return this.http.get(`http://localhost:8001/api/v1/books/borrow/${bookId}`)
    .toPromise().then(response => response)
    .catch(error => error.message);
  }

  returnBook(bookId) {
    return this.http.get(`http://localhost:8001/api/v1/books/${bookId}/return`)
    .toPromise().then(response => response)
    .catch(error => error.message);
  }

  createBook(bookDetails) {
    return this.http.post(`http://localhost:8001/api/v1/books`, bookDetails)
    .toPromise().then(response => response)
    .catch(error => error.message);
  }
}
