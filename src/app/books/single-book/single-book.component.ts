import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { BooksService } from '../../services/books/books.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit {
  singleBook: null;
  bookId: String;
  singlePage: Boolean;
  isBorrowed = false;
  constructor(
    private route: ActivatedRoute,
    private book: BooksService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.book.getBook(params.id).then(response => {
        if (response) {
          this.singleBook = response && response;
          this.singlePage = true;
        }
      })
      .catch(error => console.log(error));

      this.book.getABorrowed(params.id).then(response => {
        if (response.length > 0) {
          this.isBorrowed = true;
        }
      })
      .catch(error => console.log(error));
    });
  }

  borrowBook() {
    this.route.params.subscribe( params => {
      this.book.borrowBook(params.id).then(response => {
        if (response) {
          this.isBorrowed = true;
          this.singlePage = true;
        }
      })
      .catch(error => console.log(error));
    });
  }

  returnBook() {
    this.route.params.subscribe( params => {
      this.book.returnBook(params.id).then(response => {
        if (response) {
          this.isBorrowed = false;
          this.singlePage = true;
        }
      })
      .catch(error => console.log(error));
    });
  }
}
