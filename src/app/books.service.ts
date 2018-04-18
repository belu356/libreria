import { Injectable } from '@angular/core';
import { Http, RequestOptions, RequestOptionsArgs, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { books } from './books';


@Injectable()
export class BooksService {
book = {};
  constructor(private _http: Http) { }

  getBooks(): Observable<books[]> {
    return this._http.get('http://localhost:8888/api/books')
      .map(function (data) {
        return data.json();
      })
  }

  saveBook(book) {
return this._http.post('http://localhost:8888/api/books',{
  book: book
})

  }
}


