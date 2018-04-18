import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { BooksService } from './../books.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {


  form: FormGroup;
  book = {}
  constructor(private formB: FormBuilder,
    private booksService: BooksService) {

    this.createForm();
  }

  private createForm() {
    this.form = this.formB.group({
      titulo: [null, [Validators.required]],
      genero: [null, [Validators.required]],
      autor: [null, [Validators.required]]

    })
  }

  saveBook() {
    return this.booksService.saveBook(this.book).toPromise()
      .then(function () {
        this.BooksService.getAll().subscribe(book => {
          this.book = book
          console.log('agregado')
        })
      })

  }


  ngOnInit() {
  }

}
