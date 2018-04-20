import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { BooksService } from './../books.service';
import { books } from '../books'; 

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {
  @Output() sendBook = new EventEmitter();
  form: FormGroup;
  book = [];
  constructor(private formB: FormBuilder,
    private booksService: BooksService) {

    this.createForm();
  }

  private createForm() {
    this.form = this.formB.group({
      title: [null, [Validators.required]],
      genre: [null, [Validators.required]],
      author: [null, [Validators.required]]
    })
  }

  ngOnInit() {
    
  }

  saveBook(form) {
    this.book = form.value;
    this.booksService.saveBook(this.book)
    .toPromise()
       .then(res => {
         console.log(res);
         this.booksService.getBooks().subscribe(book => {
           this.book = book;
           this.sendBook.emit(this.book);
           console.log('agregado')
         })
       })
   }
}
