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
  list: Array<any>;
  constructor(private http: Http) {}

  find(): Observable<any> {
      return this.http.get(this.url, this.options)
        .map((response: Response) => this.list = response.json())
        .catch((error) => {
          return this.handleError(error);
      });
  }

  create(body): Observable<any> {
      return this.http.post(this.url, JSON.stringify(body), this.options)
        .map((response: Response) => {
          const item = response.json();
          this.list.push(item);
          console.log('list', this.list);
          return item;
        })
        .catch((error) => {
          return this.handleError(error);
      });
  }

  findById(id): Observable<any> {
      return this.http.get(`${this.url}/${id}`, this.options)
        .map((response: Response) => response.json())
        .catch((error) => {
          return this.handleError(error);
      });
  }

  update(body): Observable<any> {
      return this.http.put(`${this.url}/${body._id}`, JSON.stringify(body), this.options)
        .map((response: Response) => response.json())
        .catch((error) => {
          return this.handleError(error);
      });
  }

  remove(_id: number): Observable<any> {
      return this.http.delete(`${this.url}/${_id}`, this.options)
      .map((response: Response) => {
        const index = this.list.findIndex(todo => todo._id === _id);
        this.list.splice(index, 1);
      })
      .catch(this.handleError);
  }

  searchByProperty(property: string, value: any) {
    return this.list.find(item => item[property] === value);
  }

  set(url): void {
    this.url = url;
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
