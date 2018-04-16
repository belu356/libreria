import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {books} from './books';


@Injectable()
export class BooksService {

  constructor(private http: Http ) { }

  getBooks():Observable<books[]> {
    return this.http.get('')
    .map(function (data){
      return data.json();
    })
  }
}
