import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  get(url) {
    return this.http.get(url)
  }
  post(url, data) {
    return this.http.post(url, data);
  }

}
