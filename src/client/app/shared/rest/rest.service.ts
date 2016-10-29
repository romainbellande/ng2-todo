import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Observable} from 'rxjs/Rx';

@Injectable()
export class Rest {
  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });
  url: string;
  constructor(private http: Http) {}

  find(): Observable<any> {
      return this.http.get(this.url, this.options)
        .map((response: Response) => response.json())
        .catch((error) => {
          return this.handleError(error);
      });
  }

  create(body): Observable<any> {
      return this.http.post(this.url, JSON.stringify(body), this.options)
        .map((response: Response) => response.json())
        .catch((error) => {
          return this.handleError(error);
      });
  }

  findById(): Observable<any> {
      return this.http.get(this.url, this.options)
        .map((response: Response) => response.json())
        .catch((error) => {
          return this.handleError(error);
      });
  }

  update(body): Observable<any> {
      return this.http.put(this.url, JSON.stringify(body), this.options)
        .map((response: Response) => response.json())
        .catch((error) => {
          return this.handleError(error);
      });
  }

  remove(): Observable<any> {
      return this.http.delete(this.url, this.options)
      .map((response: Response) => response.json())
      .catch((error) => {
        return this.handleError(error);
      });
  }

  set(url): void {
    this.url = url;
  }

  private handleError(error: any) {
    return Observable.throw(error || 'Server error');
  }
}
