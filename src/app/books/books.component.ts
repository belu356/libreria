import { BooksService } from './../books.service';
import { Component, OnInit } from '@angular/core';
import {books} from '../books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books = [];

  constructor(private booksService : BooksService) { }

  ngOnInit() {
    this.booksService.getBooks().subscribe(books => {
      this.books = books;
    })

  }
  
  receiveBook($event) {
    this.books = $event;
  }
}
