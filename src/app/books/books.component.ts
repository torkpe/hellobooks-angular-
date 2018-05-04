import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  bookCollections: any[];
  singlePage = false;
  constructor(private books: BooksService) { }

  ngOnInit() {
    this.books.getBooks().then(response => {
      this.bookCollections = response;
    })
    .catch(error => console.log(error));
  }
}
