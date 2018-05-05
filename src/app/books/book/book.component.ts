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
  @Input() quantity: any;
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
    this.quantity = this.quantity - 1;
  }

  onBookReturn() {
    this.returnBook.emit();
    this.quantity = this.quantity + 1;
  }
}
