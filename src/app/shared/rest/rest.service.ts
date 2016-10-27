import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Observable} from 'rxjs/Rx';

@Injectable()
export class Rest {
  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });
  constructor(private http: Http) {}

  get(url): Observable<any> {
    return this.http.get(url, this.options)
    .map((response: Response) => response.json())
    .catch((error) => {
      return this.handleError(error);
    });
  }

  private handleError(error: any) {
    return Observable.throw(error || 'Server error');
  }
}
