import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/cache';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';

declare var baseUrl: any;

@Injectable()
export class NavService {
  baseUrl: string;

  _navData: Observable<any>;

  constructor(private http: Http) {
    this.baseUrl = baseUrl;
  }

  getNavData(): Observable<any> {
    if (!this._navData) {
      this._navData = this.http.get(this.baseUrl + "/api/application")
          .map((res: Response) => res.json())
          .cache();
    }
    return this._navData;
  }
}
