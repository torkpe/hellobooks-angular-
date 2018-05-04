import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {
  @Input() title: String;
  @Input() author: String;
  @Input() cover: String;
  @Input() quantity: Number;
  @Input() description: String;
  @Input() bookId: String;
  @Input() singlePage: Boolean;
  @Output() borrowBook = new EventEmitter();
  @Output() returnBook = new EventEmitter();
  @Input() isBorrowed = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }
  onBookBorrow() {
    this.borrowBook.emit();
  }

  onBookReturn() {
    this.returnBook.emit();
  }
}
