import { Injectable } from '@angular/core';
import { Http, RequestOptions, RequestOptionsArgs, Headers } from '@angular/http';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { books } from './books';
import { map, tap } from 'rxjs/operators';


 
@Injectable()
export class BooksService {

  constructor(private http: Http,
  private router: Router) { }
  books: any;

  getBooks(): Observable<books[]> {
    return this.http.get('http://localhost:8888/api/books')
      .map(data => data.json());
  }

saveBook(books) {
  console.log(books);
    return this.http.post('http://localhost:8888/api/books', books)
    /*
    .subscribe(res =>{
    let id = res ['_id'];
    this.router.navigate(['http://localhost:8888/api/books' + id]);
    }, (err) =>{
      console.log(err)
    }
  )*/
}
  
}//u know this is wrong, bitch



