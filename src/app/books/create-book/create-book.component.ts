import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books/books.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  constructor(private book: BooksService) { }

  ngOnInit() {
  }
  onsubmit(bookDetails) {

    const { title, cover, author, quantity, description } = bookDetails;
    if (!title.trim()) {
      return console.log('title field is compulsory');
    }
    if (!cover.trim()) {
      return console.log('cover field is compulsory');
    }
    if (!author.trim()) {
      return console.log('author field is compulsory');
    }
    if (!quantity) {
      return console.log('quantity field is compulsory');
    }
    if (!description.trim()) {
      return console.log('description field is compulsory');
    }

    this.book.createBook(bookDetails)
    .then((response) => {
      console.log(response);
    })
    .catch(error => console.log(error));

  }
}
